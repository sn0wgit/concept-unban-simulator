import './greenbutton.css'

interface Props {
  buttonText: string,
  context: any,
  newContext: string
}

function GreenButton({buttonText, context, newContext}: Props) {
  function handleClick() {
    context(newContext)
  }
  return <button className="greenButton" onClick={handleClick}>{buttonText}</button>
}

export default GreenButton