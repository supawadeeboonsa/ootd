import { useEffect, useState } from 'react'
import { analyzingQuotes } from '../../data/styleQuizData.js'
import Mascot from './Mascot.jsx'

const DURATION_MS = 2500

export default function QuizAnalyzing({ onDone }) {
  const [quoteIndex, setQuoteIndex] = useState(0)

  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setQuoteIndex((i) => (i + 1) % analyzingQuotes.length)
    }, 1000)
    const doneTimer = setTimeout(onDone, DURATION_MS)
    return () => {
      clearInterval(quoteTimer)
      clearTimeout(doneTimer)
    }
  }, [onDone])

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-6 py-24 text-center">
      <Mascot size="lg" pulse />
      <p className="text-[15px] font-medium">กำลังค้นหาตัวตนของคุณ...</p>
      <p className="min-h-[3em] text-[13px] font-light italic text-muted">"{analyzingQuotes[quoteIndex]}"</p>
      <div className="h-1 w-40 overflow-hidden rounded-full bg-border">
        <div
          className="h-full rounded-full bg-accent"
          style={{ animation: `fillBar ${DURATION_MS}ms linear forwards` }}
        />
      </div>
      <style>{`
        @keyframes fillBar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  )
}
