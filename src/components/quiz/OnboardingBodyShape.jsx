import Mascot from './Mascot.jsx'
import ProgressDash from './ProgressDash.jsx'
import { bodyShapesByGender } from '../../data/onboardingData.js'

export default function OnboardingBodyShape({ gender, onSelect, onBack }) {
  const shapes = bodyShapesByGender[gender] || bodyShapesByGender.other

  return (
    <div className="mx-auto max-w-lg py-10 text-center">
      <ProgressDash stepIndex={2} onBack={onBack} />
      <Mascot size="lg" className="mx-auto" />

      <h2 className="mt-6 text-[20px] font-semibold">รูปร่างของคุณใกล้เคียงแบบไหน ?</h2>
      <p className="mt-1 text-[13px] font-light text-muted">เลือกที่ตรงที่สุด ไม่มีผิดถูก</p>

      <div className="mt-6 grid grid-cols-2 gap-3">
        {shapes.map((shape) => (
          <button
            key={shape.key}
            onClick={() => onSelect(shape)}
            className="flex aspect-square flex-col items-center justify-center gap-2 rounded-xl border border-[#E0DDD9] bg-[#EAE4DC] p-3 transition-colors hover:border-warm"
          >
            <span className="text-3xl">{shape.icon}</span>
            <span className="text-[13px] font-medium">{shape.label}</span>
            <span className="text-center text-[11px] font-light text-muted">{shape.description}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
