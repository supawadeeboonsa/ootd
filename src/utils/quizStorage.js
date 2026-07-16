const RESULT_KEY = 'ootd_style_result'
const HISTORY_KEY = 'ootd_style_history'

// sessionStorage (not localStorage) — a saved result only lasts this browser
// session, so closing the site and coming back starts the quiz fresh.
export function saveQuizResult(result, profile) {
  const entry = { ...result, profile, date: new Date().toISOString() }
  sessionStorage.setItem(RESULT_KEY, JSON.stringify(entry))

  const history = getQuizHistory()
  history.push(entry)
  sessionStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(-5)))

  return entry
}

export function getLatestQuizResult() {
  const raw = sessionStorage.getItem(RESULT_KEY)
  return raw ? JSON.parse(raw) : null
}

export function getQuizHistory() {
  const raw = sessionStorage.getItem(HISTORY_KEY)
  return raw ? JSON.parse(raw) : []
}

export function getPreviousQuizResult() {
  const history = getQuizHistory()
  return history.length >= 2 ? history[history.length - 2] : null
}
