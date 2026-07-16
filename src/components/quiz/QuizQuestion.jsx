import { useState } from 'react'
import Mascot from './Mascot.jsx'
import ProgressDash from './ProgressDash.jsx'

const ONBOARDING_STEPS = 3

export default function QuizQuestion({ question, index, total, onAnswer, onBack }) {
  const [selected, setSelected] = useState(null)

  const handleSelect = (optionIndex) => {
    if (selected !== null) return
    setSelected(optionIndex)
    setTimeout(() => onAnswer(optionIndex), 300)
  }

  return (
    <div className="mx-auto max-w-lg py-6 text-center">
      <ProgressDash stepIndex={ONBOARDING_STEPS + index} onBack={onBack} />
      <Mascot size="md" className="mx-auto" />

      <p className="mt-4 text-[12px] font-medium uppercase tracking-wider text-muted">
        ข้อ {index + 1} จาก {total}
      </p>
      <h2 className="mt-3 text-[20px] font-semibold leading-snug">{question.prompt}</h2>

      <div className="mt-8 space-y-3 text-left">
        {question.options.map((option, i) => {
          const isSelected = selected === i
          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={selected !== null}
              className={`w-full rounded-xl border px-5 py-4 text-left text-[14px] transition-colors ${
                isSelected
                  ? 'border-accent bg-accent text-white'
                  : 'border-border bg-surface text-ink hover:bg-tag'
              }`}
            >
              {option.text}
            </button>
          )
        })}
      </div>
    </div>
  )
}
