import './errorfooter.css'
import GreenButton from '../buttons/greenbutton'
import { SceneContext } from '../SceneContext'
import { useContext } from 'react'

function ErrorFooter() {
  return (
    <div className="DialogContainerComponentStyle-footerContainer"><GreenButton buttonText="Подать аппеляцию" context={useContext(SceneContext)} newContext="appeal"/></div>
  )
}

export default ErrorFooter