import { useState } from 'react'
import Mascot from './Mascot.jsx'

export default function OnboardingName({ onNext, initialValue = '' }) {
  const [name, setName] = useState(initialValue)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim()) onNext(name.trim())
  }

  return (
    <div className="mx-auto max-w-sm py-10 text-center">
      <Mascot size="lg" className="mx-auto" />

      <h2 className="mt-6 text-[20px] font-semibold">สวัสดี เราชื่อ Style</h2>
      <p className="mt-1 text-[14px] font-light text-muted">อยากให้เรียกชื่อคุณว่าอะไรดี ?</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input
          autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="ชื่อของคุณ"
          className="w-full rounded-xl border border-[#E0DDD9] bg-surface px-4 py-3 text-[15px] outline-none transition-colors focus:border-warm"
        />
        <button
          type="submit"
          disabled={!name.trim()}
          className="w-full rounded-xl bg-accent px-5 py-3 text-[15px] font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-40"
        >
          ถัดไป
        </button>
      </form>
    </div>
  )
}
