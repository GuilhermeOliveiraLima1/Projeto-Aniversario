import React from 'react'
import './Menu.css'

const BottomMenu = () => {
  return (
    <div className="bottom-menu">
      <button onClick={() => window.location.href = '/carrosel'}>Carrosel</button>
      <button onClick={() => window.location.href = '/'}>Início</button>
      <button onClick={() => window.location.href = '/songs'}>Música</button>

    </div>
  )
}

export default BottomMenu
