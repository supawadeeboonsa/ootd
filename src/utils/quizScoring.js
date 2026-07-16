import { archetypes, hybridLabels } from '../data/styleQuizData.js'

export function computeQuizResult(answers, questions) {
  const scores = Object.fromEntries(Object.keys(archetypes).map((k) => [k, 0]))

  answers.forEach((optionIndex, qIdx) => {
    const option = questions[qIdx]?.options[optionIndex]
    if (!option) return
    Object.entries(option.scores).forEach(([key, pts]) => {
      scores[key] += pts
    })
  })

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1])
  const [primaryKey, primaryScore] = sorted[0]
  const [secondaryKey, secondaryScore] = sorted[1]
  const isHybrid = primaryScore - secondaryScore < 3 && secondaryScore > 0

  let hybridLabel = null
  if (isHybrid) {
    const pairKey = [primaryKey, secondaryKey].sort().join('_')
    hybridLabel = hybridLabels[pairKey] || null
  }

  return {
    scores,
    sorted,
    primaryKey,
    secondaryKey,
    isHybrid,
    hybridLabel,
  }
}
