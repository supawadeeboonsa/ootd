import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { questions } from '../data/styleQuizData.js'
import { computeQuizResult } from '../utils/quizScoring.js'
import { saveQuizResult } from '../utils/quizStorage.js'
import OnboardingName from '../components/quiz/OnboardingName.jsx'
import OnboardingGender from '../components/quiz/OnboardingGender.jsx'
import OnboardingBodyShape from '../components/quiz/OnboardingBodyShape.jsx'
import QuizQuestion from '../components/quiz/QuizQuestion.jsx'
import QuizAnalyzing from '../components/quiz/QuizAnalyzing.jsx'
import QuizResult from '../components/quiz/QuizResult.jsx'

// STEP 1-15 per onboarding-quiz-concept.md: name -> gender -> bodyShape -> question(x10) -> analyzing -> result
export default function StyleQuiz() {
  const [stage, setStage] = useState('name')
  const [profile, setProfile] = useState({})
  const [answers, setAnswers] = useState([])
  const [result, setResult] = useState(null)
  const navigate = useNavigate()

  const handleName = (name) => {
    setProfile({ name })
    setStage('gender')
  }

  const handleGender = (gender) => {
    setProfile((p) => ({ ...p, gender }))
    setStage('bodyShape')
  }

  const handleBodyShape = (bodyShape) => {
    setProfile((p) => ({ ...p, bodyShape }))
    setStage('question')
  }

  const handleAnswer = (optionIndex) => {
    const next = [...answers, optionIndex]
    setAnswers(next)
    if (next.length === questions.length) {
      setStage('analyzing')
    }
  }

  const handleBackFromQuestion = () => {
    if (answers.length === 0) {
      setStage('bodyShape')
    } else {
      setAnswers((prev) => prev.slice(0, -1))
    }
  }

  const handleAnalyzingDone = () => {
    const computed = computeQuizResult(answers, questions)
    const saved = saveQuizResult(computed, profile)
    setResult(saved)
    setStage('result')
  }

  const handleRetake = () => {
    setProfile({})
    setAnswers([])
    setResult(null)
    setStage('name')
  }

  return (
    <div>
      {stage === 'name' && <OnboardingName onNext={handleName} initialValue={profile.name || ''} />}
      {stage === 'gender' && (
        <OnboardingGender
          name={profile.name || ''}
          onSelect={handleGender}
          onBack={() => setStage('name')}
        />
      )}
      {stage === 'bodyShape' && (
        <OnboardingBodyShape
          gender={profile.gender}
          onSelect={handleBodyShape}
          onBack={() => setStage('gender')}
        />
      )}
      {stage === 'question' && (
        <QuizQuestion
          key={answers.length}
          question={questions[answers.length]}
          index={answers.length}
          total={questions.length}
          onAnswer={handleAnswer}
          onBack={handleBackFromQuestion}
        />
      )}
      {stage === 'analyzing' && <QuizAnalyzing onDone={handleAnalyzingDone} />}
      {stage === 'result' && result && (
        <>
          <QuizResult
            result={result}
            name={profile.name}
            bodyShape={profile.bodyShape}
            onRetake={handleRetake}
          />
          <div className="mx-auto max-w-lg pb-6 text-center">
            <button
              onClick={() => navigate('/my-style')}
              className="text-[13px] font-medium text-muted underline hover:text-ink"
            >
              ดูผลใน My Style →
            </button>
          </div>
        </>
      )}
    </div>
  )
}
