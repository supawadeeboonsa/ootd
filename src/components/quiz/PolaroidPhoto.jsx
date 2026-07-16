import { useState } from 'react'

// Renders a photo in a tilted polaroid frame. Falls back to the emoji/label
// pair until a real image is dropped into public/mood-images/<style>/<n>.jpg.
export default function PolaroidPhoto({ src, emoji, label, rotate = 0, className = '' }) {
  const [errored, setErrored] = useState(false)

  return (
    <div
      className={`flex flex-col items-center rounded-sm bg-white p-2 pb-3 shadow-md ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className="flex aspect-square w-full items-center justify-center overflow-hidden bg-[#EFEDEA]">
        {!errored ? (
          <img
            src={src}
            alt={label}
            className="h-full w-full object-cover"
            onError={() => setErrored(true)}
          />
        ) : (
          <span className="text-3xl">{emoji}</span>
        )}
      </div>
      <span className="mt-1.5 w-full truncate text-center text-[9px] font-light leading-tight text-[#1A1A1A]/60">
        {label}
      </span>
    </div>
  )
}
