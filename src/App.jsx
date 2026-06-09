import { useState } from 'react'
import { Analytics } from '@vercel/analytics/react';
import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/welcome'
import Game from './pages/game'
import Gameover from './pages/gameover'

function App() {
  const [dark, setDark] = useState(false)

  return (
    <div className={dark ? "dark" : "light"}>
      <button className="theme-toggle" onClick={() => setDark(!dark)}>
        {dark ? "☀️" : "🌙"}
      </button>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/game' element={<Game />} />
        <Route path='/gameover' element={<Gameover />} />
      </Routes>
      <Analytics />
    </div>
  )
}

export default App