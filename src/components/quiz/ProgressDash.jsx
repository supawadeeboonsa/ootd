const TOTAL_STEPS = 13 // 3 onboarding + 10 quiz questions, per onboarding-quiz-concept.md

export default function ProgressDash({ stepIndex, onBack }) {
  return (
    <div className="mb-6 flex items-center justify-center gap-3">
      {onBack ? (
        <button
          onClick={onBack}
          aria-label="ย้อนกลับ"
          className="flex h-6 w-6 shrink-0 items-center justify-center text-muted transition-colors hover:text-ink"
        >
          ←
        </button>
      ) : (
        <span className="w-6 shrink-0" />
      )}
      <div className="flex min-w-0 flex-1 justify-center gap-1">
        {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
          <span
            key={i}
            className={`h-1 max-w-6 flex-1 rounded-full transition-colors ${i <= stepIndex ? 'bg-accent' : 'bg-border'}`}
          />
        ))}
      </div>
      <span className="w-6 shrink-0" />
    </div>
  )
}

export { TOTAL_STEPS }
