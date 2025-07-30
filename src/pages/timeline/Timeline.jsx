import React from 'react'
import BottomMenu from '../../components/menu/Menu'
import Header from '../../components/header/Header'
import './Timeline.css'
import TimelineCarousel from '../../components/carrosel/Carrosel';
import Carrosel from '../../components/carrosel/Carrosel';



export default function Timeline() {
  return (
    <div>
      <Header />
      <Carrosel/>
      <BottomMenu />
    </div>
  )
}
