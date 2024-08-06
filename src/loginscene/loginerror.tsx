import './loginerror.css'

interface Props{
    heading: string,
    description: string
}

function LoginError({heading, description}: Props){
    function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>):void{
        e.currentTarget.remove()
    }
    return(
        <div className="CommonEntrance-footerErrorWhite" onClick={handleClick}>
            <h2 className="CommonEntrance-footerErrorWhiteHeading">{heading}</h2>
            <p className="CommonEntrance-footerErrorWhiteDescription">{description}</p>
        </div>
    )
}

export default LoginError