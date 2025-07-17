import React from 'react'
import './Menu.css'

const BottomMenu = () => {
  return (
    <div className="bottom-menu">
      <button onClick={() => window.location.href = '/timeline'}>Linha do Tempo</button>
      <button onClick={() => window.location.href = '/songs'}>Música</button>
      <button onClick={() => window.location.href = '/'}>Início</button>
      <button onClick={() => window.location.href = '/loveyoubecause'}>Eu te amo porque...</button>
      <button onClick={() => window.location.href = '/miniGame'}>Jogo</button>
    </div>
  )
}

export default BottomMenu
