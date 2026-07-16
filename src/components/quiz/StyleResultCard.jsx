import { archetypes } from '../../data/styleQuizData.js'
import PolaroidPhoto from './PolaroidPhoto.jsx'

const PHOTO_ROTATIONS = [-6, 4, -3, 6]

export default function StyleResultCard({ result, name }) {
  const primary = archetypes[result.primaryKey]
  const secondary = archetypes[result.secondaryKey]
  const dateLabel = new Date(result.date).toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'short',
  })

  return (
    <div
      className="mx-auto flex aspect-[3/4] w-full max-w-xs flex-col justify-between rounded-[20px] border p-6 shadow-card"
      style={{ backgroundColor: primary.bg, color: primary.text, borderColor: `${primary.text}22` }}
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.8px] opacity-60">OOTD</p>

      <div
        className="grid grid-cols-2 gap-2 rounded-xl p-3"
        style={{ backgroundColor: `${primary.text}0D` }}
      >
        {primary.mood.map(([emoji, label], i) => (
          <PolaroidPhoto
            key={label}
            src={primary.images?.[i]}
            emoji={emoji}
            label={label}
            rotate={PHOTO_ROTATIONS[i]}
            className="p-1.5 pb-2"
          />
        ))}
      </div>

      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.8px] opacity-60">My Style Is</p>
        <p className="text-[26px] font-semibold uppercase tracking-[-0.5px]">{primary.name}</p>
        {result.isHybrid && (
          <p className="text-[13px] font-light opacity-70">with {secondary.name}</p>
        )}

        <div className="my-3 h-px w-full" style={{ backgroundColor: `${primary.text}22` }} />

        <p className="text-[13px] font-light italic leading-relaxed">"{primary.tagline}"</p>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-[11px] font-light opacity-50">{dateLabel}</p>
          {name && <p className="text-[11px] font-light opacity-50">{name}</p>}
        </div>
      </div>
    </div>
  )
}
