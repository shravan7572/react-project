import {Routes,Route} from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
//imported game component
import Welcome from './pages/welcome'
import Game from './pages/game'
import Gameover from './pages/gameover'

function App(){
  return(
    <>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/game' element={<Game />} />
        <Route path='/gameover' element={<Gameover />} />
      </Routes>
      <Analytics />
    </>
  )
} 
export default App