import { Link } from 'react-router-dom'
import { archetypes, dotsToHex, evolutionInsights } from '../data/styleQuizData.js'
import { getLatestQuizResult, getPreviousQuizResult } from '../utils/quizStorage.js'
import { computeFitGuide } from '../utils/fitGuide.js'
import { bestOutfits } from '../data/mockData.js'
import Tag from '../components/Tag.jsx'

export default function MyStyle() {
  const result = getLatestQuizResult()

  if (!result) {
    return (
      <div className="mx-auto max-w-lg py-10 text-center">
        <p className="text-[12px] font-medium uppercase tracking-wider text-warm">Style Identity</p>
        <h2 className="mt-2 text-[20px] font-medium">ยังไม่รู้จัก style ตัวเองใช่ไหม?</h2>
        <p className="mt-2 text-[13px] font-light text-muted">
          ทำ Style Quiz 10 ข้อ เพื่อดูว่าตอนนี้คุณเป็นใครในเรื่องของการแต่งตัว
        </p>
        <Link
          to="/style-quiz"
          className="mt-6 inline-block rounded-xl bg-accent px-6 py-3 text-[15px] font-medium text-white transition-opacity hover:opacity-90"
        >
          ทำแบบทดสอบ →
        </Link>
      </div>
    )
  }

  const primary = archetypes[result.primaryKey]
  const secondary = archetypes[result.secondaryKey]
  const maxScore = result.sorted[0][1] || 1
  const previous = getPreviousQuizResult()

  const profile = result.profile
  const fitGuide = computeFitGuide(profile?.bodyShape, result.primaryKey)

  return (
    <div className="mx-auto max-w-2xl space-y-10">
      <div>
        <p className="text-[12px] font-medium uppercase tracking-wider text-warm">Style Identity</p>
        <h2 className="mt-1 text-[20px] font-medium">
          {profile?.name ? `${profile.name} ใส่ชุดแบบนี้บ่อยที่สุด` : 'คุณใส่ชุดแบบนี้บ่อยที่สุด'}
        </h2>
      </div>

      <div className="rounded-2xl bg-surface p-6 shadow-card">
        {result.isHybrid && result.hybridLabel && (
          <Tag warm>✨ {result.hybridLabel}</Tag>
        )}
        <h3 className="mt-2 text-[22px] font-semibold uppercase tracking-[-0.5px]">{primary.name}</h3>
        {result.isHybrid && (
          <p className="text-[13px] font-light text-muted">with {secondary.name} notes</p>
        )}
        <p className="mt-3 text-[14px] font-light italic leading-relaxed text-ink/80">
          "{primary.tagline}"
        </p>

        <div className="mt-5 space-y-3">
          {result.sorted.map(([key, pts]) => (
            <div key={key}>
              <div className="mb-1 flex items-center justify-between text-[14px]">
                <span className="font-medium">{archetypes[key].name}</span>
                <span className="text-muted">{pts} pts</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-tag">
                <div
                  className="h-full rounded-full bg-accent"
                  style={{ width: `${(pts / maxScore) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {previous && (
        <div className="rounded-xl bg-tag px-5 py-4 text-[13px] font-light text-muted">
          {previous.primaryKey === result.primaryKey ? (
            <span>Style ของคุณ consistent มาก — ยังคงเป็น {primary.name} เหมือนเดิม</span>
          ) : (
            <span>
              Style คุณกำลัง evolve → {archetypes[previous.primaryKey].name} → {primary.name}
              {(() => {
                const insightKey = [previous.primaryKey, result.primaryKey].sort().join('_')
                const insight = evolutionInsights[insightKey]
                return insight ? ` — "${insight}"` : ''
              })()}
            </span>
          )}
        </div>
      )}

      {fitGuide && (
        <div>
          <p className="mb-3 text-[12px] font-medium uppercase tracking-wider text-muted">
            — Fit ที่เหมาะกับรูปร่างคุณ —
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

      <div>
        <p className="mb-3 text-[12px] font-medium uppercase tracking-wider text-muted">
          — Color Palette ของคุณ —
        </p>
        <div className="flex gap-3">
          {dotsToHex(primary.colorDots).map((c, i) => (
            <div
              key={i}
              className="h-12 w-12 rounded-full border border-border shadow-card"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
      </div>

      <div>
        <p className="mb-4 text-[12px] font-medium uppercase tracking-wider text-muted">
          — Outfit ที่ดีที่สุดของคุณ —
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {bestOutfits.map((o) => (
            <div key={o.id} className="overflow-hidden rounded-xl bg-surface shadow-card">
              <div className="flex h-28 items-center justify-center bg-tag text-4xl">👗</div>
              <div className="space-y-2 p-3">
                <p className="text-[14px] font-medium leading-snug">{o.name}</p>
                <Tag warm>{o.tag}</Tag>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Link to="/style-quiz" className="text-[13px] font-medium text-muted underline hover:text-ink">
          ทำแบบทดสอบใหม่
        </Link>
      </div>
    </div>
  )
}
