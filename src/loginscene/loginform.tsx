import './loginform.css'
import { useContext } from 'react'
import { UsernameContext } from '../UsernameContext'
import { SceneContext } from '../SceneContext'

function LoginForm(){
    const usernameContext = useContext(UsernameContext)
    const sceneContext = useContext(SceneContext)
    const submitButton = document.getElementsByClassName("CommonEntrance-loginFormButton")
    let localNicknameValue:string = ""
    function checkNickname(e: React.ChangeEvent<HTMLInputElement>){
        let regex = /[^A-Za-z0-9_. -]/g;
        if (e.target.value.search(regex) != -1){
            e.target.classList.add("CommonEntrance-loginFormInputBlocked")
            submitButton[0].classList.remove("CommonEntrance-loginFormButtonActive")
        } else{
            e.target.classList.remove("CommonEntrance-loginFormInputBlocked")
            if (e.target.value.length > 2){
                submitButton[0].classList.add("CommonEntrance-loginFormButtonActive")
                localNicknameValue = e.target.value
            }
            else{
                submitButton[0].classList.remove("CommonEntrance-loginFormButtonActive")
            }
        }
    }

    function submitNickname(){
        usernameContext.newUsernameContextName(localNicknameValue)
        sceneContext("error")
    }

    return(
        <div className="CommonEntrance-loginForm">
            <span className="CommonEntrance-loginFormTitle">Вход</span>
            <input className="CommonEntrance-loginFormInput" placeholder="Имя" type="text" onChange={checkNickname}></input>
            <label className="CommonEntrance-loginFormRememberMe">
                <input className="CommonEntrance-loginFormRememberMeCheckbox" type="checkbox" defaultChecked/>
                Запомнить меня
            </label>
            <button className="CommonEntrance-loginFormButton" onClick={submitNickname}>ИГРАТЬ</button>
        </div>
    )
}

export default LoginForm