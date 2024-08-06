import './errorheader.css'
import { SceneContext } from '../SceneContext'

function ErrorHeader() {
  function handleClick() {
    console.log(SceneContext)
  }
  return (
    <div className="DialogContainerComponentStyle-header">
        <h1>Внимание!</h1>
        <div className="DialogContainerComponentStyle-imgClose" onClick={handleClick}></div>
    </div>
  )
}

export default ErrorHeader