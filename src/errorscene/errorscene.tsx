import './errorscene.css'
import ErrorHeader from './errorheader'
import ErrorContent from './errorcontent'
import ErrorFooter from './errorfooter'
function ErrorScene() {

  return (
    <div className="DialogContainerComponentStyle-containerCaution DialogContainerComponentStyle-container">
      <ErrorHeader />
      <ErrorContent />
      <ErrorFooter />
    </div>
  )
}

export default ErrorScene
