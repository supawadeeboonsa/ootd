function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.arcTo(x + w, y, x + w, y + h, r)
  ctx.arcTo(x + w, y + h, x, y + h, r)
  ctx.arcTo(x, y + h, x, y, r)
  ctx.arcTo(x, y, x + w, y, r)
  ctx.closePath()
}

function withAlpha(hex, alpha) {
  const h = hex.replace('#', '')
  const r = parseInt(h.substring(0, 2), 16)
  const g = parseInt(h.substring(2, 4), 16)
  const b = parseInt(h.substring(4, 6), 16)
  return `rgba(${r},${g},${b},${alpha})`
}

function wrapText(ctx, text, maxWidth) {
  const words = text.split(' ')
  const lines = []
  let line = ''
  words.forEach((word) => {
    const test = line ? `${line} ${word}` : word
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line)
      line = word
    } else {
      line = test
    }
  })
  if (line) lines.push(line)
  return lines
}

// Loads an image but never hangs the export — resolves null on error or timeout
// so a missing mood photo just falls back to its emoji.
function loadImage(src, timeoutMs = 2500) {
  return new Promise((resolve) => {
    const img = new Image()
    let settled = false
    const finish = (value) => {
      if (settled) return
      settled = true
      clearTimeout(timer)
      resolve(value)
    }
    const timer = setTimeout(() => finish(null), timeoutMs)
    img.onload = () => finish(img)
    img.onerror = () => finish(null)
    img.src = src
  })
}

function drawCover(ctx, img, dx, dy, dw, dh) {
  const scale = Math.max(dw / img.width, dh / img.height)
  const sw = dw / scale
  const sh = dh / scale
  const sx = (img.width - sw) / 2
  const sy = (img.height - sh) / 2
  ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
}

// Draws one tilted polaroid frame (real photo if loaded, emoji placeholder otherwise).
function drawPolaroid(ctx, { cx, cy, size, rotateDeg, img, emoji, label }) {
  const chin = size * 0.22
  const pad = size * 0.08
  const photoSize = size - pad * 2

  ctx.save()
  ctx.translate(cx, cy)
  ctx.rotate((rotateDeg * Math.PI) / 180)

  ctx.save()
  ctx.shadowColor = 'rgba(0,0,0,0.18)'
  ctx.shadowBlur = 14
  ctx.shadowOffsetY = 5
  ctx.fillStyle = '#FFFFFF'
  roundRect(ctx, -size / 2, -size / 2 - chin / 2, size, size + chin, 4)
  ctx.fill()
  ctx.restore()

  const photoX = -photoSize / 2
  const photoY = -size / 2 + pad - chin / 2

  if (img) {
    ctx.save()
    roundRect(ctx, photoX, photoY, photoSize, photoSize, 2)
    ctx.clip()
    drawCover(ctx, img, photoX, photoY, photoSize, photoSize)
    ctx.restore()
  } else {
    ctx.fillStyle = '#EFEDEA'
    ctx.fillRect(photoX, photoY, photoSize, photoSize)
    ctx.font = `${photoSize * 0.4}px sans-serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = '#1A1A1A'
    ctx.fillText(emoji, 0, photoY + photoSize / 2)
  }

  ctx.font = '300 15px "Noto Sans Thai", Inter, sans-serif'
  ctx.fillStyle = 'rgba(26,26,26,0.55)'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'alphabetic'
  const maxLabelWidth = size - 8
  let displayLabel = label
  while (ctx.measureText(displayLabel).width > maxLabelWidth && displayLabel.length > 1) {
    displayLabel = `${displayLabel.slice(0, -2)}…`
  }
  ctx.fillText(displayLabel, 0, size / 2 + chin / 2 - 8)

  ctx.restore()
}

const PHOTO_ROTATIONS = [-6, 4, -3, 6]

// Renders the shareable Style Result Card entirely on <canvas>, avoiding
// DOM-to-image conversion (which hangs when the page has cross-origin webfonts).
export async function downloadStyleCard(result, primary, secondary, name) {
  if (document.fonts?.ready) {
    await document.fonts.ready
  }

  const moodImages = await Promise.all((primary.images || []).map((src) => loadImage(src)))

  const W = 1080
  const H = 1350
  const pad = 64
  const textColor = primary.text

  const canvas = document.createElement('canvas')
  canvas.width = W
  canvas.height = H
  const ctx = canvas.getContext('2d')

  ctx.save()
  roundRect(ctx, 0, 0, W, H, 48)
  ctx.clip()
  ctx.fillStyle = primary.bg
  ctx.fillRect(0, 0, W, H)

  ctx.textBaseline = 'alphabetic'
  ctx.textAlign = 'left'
  ctx.fillStyle = withAlpha(textColor, 0.6)
  ctx.font = '600 22px Inter, "Noto Sans Thai", sans-serif'
  ctx.fillText('OOTD', pad, pad + 20)

  const gridTop = pad + 70
  const gridHeight = 380
  ctx.fillStyle = withAlpha(textColor, 0.05)
  roundRect(ctx, pad, gridTop, W - pad * 2, gridHeight, 24)
  ctx.fill()

  const cellW = (W - pad * 2) / 2
  const cellH = gridHeight / 2
  const photoSize = Math.min(cellW, cellH) * 0.66
  primary.mood.forEach(([emoji, label], i) => {
    const col = i % 2
    const row = Math.floor(i / 2)
    const cx = pad + col * cellW + cellW / 2
    const cy = gridTop + row * cellH + cellH / 2

    drawPolaroid(ctx, {
      cx,
      cy,
      size: photoSize,
      rotateDeg: PHOTO_ROTATIONS[i] || 0,
      img: moodImages[i],
      emoji,
      label,
    })
  })

  let y = gridTop + gridHeight + 80

  ctx.textAlign = 'left'
  ctx.fillStyle = withAlpha(textColor, 0.6)
  ctx.font = '600 20px Inter, sans-serif'
  ctx.fillText('MY STYLE IS', pad, y)
  y += 60

  ctx.fillStyle = textColor
  ctx.font = '700 64px Inter, sans-serif'
  ctx.fillText(primary.name.toUpperCase(), pad, y)
  y += 20

  if (result.isHybrid && secondary) {
    y += 44
    ctx.fillStyle = withAlpha(textColor, 0.7)
    ctx.font = '300 28px "Noto Sans Thai", Inter, sans-serif'
    ctx.fillText(`with ${secondary.name} notes`, pad, y)
  }

  y += 60
  ctx.strokeStyle = withAlpha(textColor, 0.15)
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(pad, y)
  ctx.lineTo(W - pad, y)
  ctx.stroke()
  y += 60

  ctx.fillStyle = withAlpha(textColor, 0.85)
  ctx.font = 'italic 300 30px "Noto Sans Thai", Inter, sans-serif'
  const lines = wrapText(ctx, `"${primary.tagline}"`, W - pad * 2)
  lines.forEach((line) => {
    ctx.fillText(line, pad, y)
    y += 44
  })

  const dateLabel = new Date(result.date).toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'short',
  })
  ctx.fillStyle = withAlpha(textColor, 0.5)
  ctx.font = '300 24px Inter, sans-serif'
  ctx.fillText(dateLabel, pad, H - pad)

  if (name) {
    ctx.textAlign = 'right'
    ctx.fillText(name, W - pad, H - pad)
    ctx.textAlign = 'left'
  }

  ctx.restore()

  const dataUrl = canvas.toDataURL('image/png')
  const link = document.createElement('a')
  link.download = `ootd-style-${primary.key}.png`
  link.href = dataUrl
  link.click()
}
