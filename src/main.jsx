import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/home/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Timeline from './pages/timeline/Timeline.jsx'
import Songs from './pages/songs/Songs.jsx'
import LoveYouBecause from './pages/love you because/LoveYouBecause.jsx'
import MiniGame from './pages/miniGames/MiniGame.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/loveyoubecause" element={<LoveYouBecause />}></Route>
        <Route path="/miniGame" element={<MiniGame />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
