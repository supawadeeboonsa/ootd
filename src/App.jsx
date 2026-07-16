import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Wardrobe from './pages/Wardrobe.jsx'
import MyStyle from './pages/MyStyle.jsx'
import Insights from './pages/Insights.jsx'
import StyleQuiz from './pages/StyleQuiz.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/my-style" replace />} />
        <Route path="/wardrobe" element={<Wardrobe />} />
        <Route path="/my-style" element={<MyStyle />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/style-quiz" element={<StyleQuiz />} />
      </Route>
    </Routes>
  )
}
