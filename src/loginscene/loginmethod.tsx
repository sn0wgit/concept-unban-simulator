import './loginmethod.css'
import { useContext } from 'react'
import { LoginStateContext } from '../loginscene/LoginStateContext'

interface Props {
    name: string,
    icon: string,
    iconOnHover: string
}

function LoginMethod({name, icon, iconOnHover}: Props){
    const setLoginStateContext = useContext(LoginStateContext)
    function handleClick(){
        setLoginStateContext("loginform")
    }
    return(
        <div className="MainEntranceLoginMethodsComponent-method" onClick={handleClick}>
            <div className="MainEntranceLoginMethodsComponent-methodCircle">
                <img className="MainEntranceLoginMethodsComponent-methodIcon" src={icon} />
                <img className="MainEntranceLoginMethodsComponent-methodIconOnHover" src={iconOnHover} />
            </div>
            <span className="MainEntranceLoginMethodsComponent-methodText">{name}</span>
        </div>
    )
}

export default LoginMethod