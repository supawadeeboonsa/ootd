import Mascot from './Mascot.jsx'
import ProgressDash from './ProgressDash.jsx'
import { genders } from '../../data/onboardingData.js'

export default function OnboardingGender({ name, onSelect, onBack }) {
  return (
    <div className="mx-auto max-w-sm py-10 text-center">
      <ProgressDash stepIndex={1} onBack={onBack} />
      <Mascot size="lg" className="mx-auto" />

      <h2 className="mt-6 text-[20px] font-semibold leading-snug">
        คุณ{name} เป็นผู้ชายหรือผู้หญิง ?
      </h2>
      <p className="mt-1 text-[13px] font-light text-muted">(เพื่อแนะนำรูปร่างให้ตรงกว่านี้)</p>

      <div className="mt-6 space-y-3">
        {genders.map((g) => (
          <button
            key={g.key}
            onClick={() => onSelect(g.key)}
            className="w-full rounded-xl border border-[#E0DDD9] bg-surface px-5 py-3.5 text-[15px] transition-colors hover:bg-tag"
          >
            {g.label}
          </button>
        ))}
      </div>
    </div>
  )
}
