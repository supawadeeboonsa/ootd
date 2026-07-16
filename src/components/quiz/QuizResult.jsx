import { useState } from 'react'
import { createPortal } from 'react-dom'
import { archetypes } from '../../data/styleQuizData.js'
import { downloadStyleCard } from '../../utils/exportStyleCard.js'
import { computeFitGuide } from '../../utils/fitGuide.js'
import Mascot from './Mascot.jsx'
import PolaroidPhoto from './PolaroidPhoto.jsx'
import StyleResultCard from './StyleResultCard.jsx'

const PHOTO_ROTATIONS = [-6, 4, -3, 6]

export default function QuizResult({ result, name, bodyShape, onRetake }) {
  const primary = archetypes[result.primaryKey]
  const secondary = archetypes[result.secondaryKey]
  const [showCard, setShowCard] = useState(false)
  const [downloading, setDownloading] = useState(false)

  const maxScore = result.sorted[0][1] || 1
  const fitGuide = computeFitGuide(bodyShape, result.primaryKey)

  const handleDownload = async () => {
    setDownloading(true)
    try {
      await downloadStyleCard(result, primary, secondary, name)
    } finally {
      setDownloading(false)
    }
  }

  return (
    <div className="mx-auto max-w-lg space-y-8 py-6">
      <div className="flex items-center justify-center gap-3">
        <Mascot size="sm" />
        <p className="text-[14px] font-light text-muted">
          {name ? `${name} นี่คือตัวตนของคุณ` : 'นี่คือตัวตนของคุณ'}
        </p>
      </div>

      <div
        className="grid grid-cols-2 gap-4 rounded-2xl p-6 sm:grid-cols-4"
        style={{ backgroundColor: primary.bg }}
      >
        {primary.mood.map(([emoji, label], i) => (
          <PolaroidPhoto
            key={label}
            src={primary.images?.[i]}
            emoji={emoji}
            label={label}
            rotate={PHOTO_ROTATIONS[i]}
          />
        ))}
      </div>

      <div className="text-center">
        {result.isHybrid && result.hybridLabel && (
          <span className="mb-2 inline-block rounded-full bg-warm/20 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-warm">
            ✨ {result.hybridLabel}
          </span>
        )}
        <h1 className="text-[28px] font-semibold uppercase tracking-[-0.5px]">{primary.name}</h1>
        {result.isHybrid && (
          <p className="mt-1 text-[14px] font-light text-muted">with {secondary.name} notes</p>
        )}
      </div>

      <div className="h-px w-full bg-border" />

      <p className="text-center text-[15px] font-light italic leading-relaxed text-ink/80">
        "{primary.tagline}"
      </p>

      <div className="h-px w-full bg-border" />

      <div>
        <p className="mb-4 text-[12px] font-medium uppercase tracking-wider text-muted">Style Breakdown</p>
        <div className="space-y-3">
          {result.sorted.map(([key, pts]) => (
            <div key={key}>
              <div className="mb-1 flex items-center justify-between text-[13px]">
                <span className="font-medium">{archetypes[key].name}</span>
                <span className="text-muted">{pts} pts</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-tag">
                <div
                  className="h-full rounded-full bg-accent"
                  style={{ width: `${(pts / maxScore) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {fitGuide && (
        <div>
          <p className="mb-4 text-[12px] font-medium uppercase tracking-wider text-muted">
            Fit ที่เหมาะกับรูปร่างคุณ
          </p>
          <div className="space-y-2 rounded-xl bg-surface p-4 shadow-card">
            {fitGuide.doItems.map((item, i) => (
              <p key={`do-${i}`} className="text-[13px] leading-relaxed">
                <span className="text-warm">✓</span> {item}
              </p>
            ))}
            {fitGuide.dontItems.map((item, i) => (
              <p key={`dont-${i}`} className="text-[13px] leading-relaxed text-muted">
                <span className="text-alert">✗</span> {item}
              </p>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          onClick={() => setShowCard(true)}
          className="flex-1 rounded-xl bg-accent px-5 py-3 text-[15px] font-medium text-white transition-opacity hover:opacity-90"
        >
          บันทึกเป็นการ์ด
        </button>
        <button
          onClick={onRetake}
          className="flex-1 rounded-xl border border-border px-5 py-3 text-[15px] font-medium text-ink transition-colors hover:bg-tag"
        >
          ทำแบบทดสอบใหม่
        </button>
      </div>

      {showCard &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4"
            onClick={() => setShowCard(false)}
          >
            <div className="w-full max-w-xs space-y-4" onClick={(e) => e.stopPropagation()}>
              <StyleResultCard result={result} name={name} />
              <div className="flex gap-3">
                <button
                  onClick={() => setShowCard(false)}
                  className="flex-1 rounded-xl border border-border bg-surface py-2.5 text-[14px] font-medium hover:bg-tag"
                >
                  ปิด
                </button>
                <button
                  onClick={handleDownload}
                  disabled={downloading}
                  className="flex-1 rounded-xl bg-accent py-2.5 text-[14px] font-medium text-white hover:opacity-90 disabled:opacity-60"
                >
                  {downloading ? 'กำลังบันทึก...' : 'ดาวน์โหลดรูปภาพ'}
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  )
}
