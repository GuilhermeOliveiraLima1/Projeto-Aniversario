import BottomMenu from '../../components/menu/Menu'
import Header from '../../components/header/Header'
import './Timeline.css'
import Carrosel from '../../components/carrosel/Carrosel';
import './Timeline.css'

export default function Timeline() {
  return (
    <div>
      <Header />
      <div classname="carrosel" >
      <Carrosel />
      </div>
      <BottomMenu />
    </div>
  )
}
