import './loginscene.css'
import LoginHeader from './loginheader'
import LoginFooter from './loginfooter'
import LoginMethodsContainer from './loginmethodscontainer'
import LoginForm from './loginform'
import { LoginStateContext } from './LoginStateContext'
import { useState } from 'react'
function LoginScene() {
    const [loginStateContext, setLoginStateContext] = useState("methods")
    return(
        <LoginStateContext.Provider value={setLoginStateContext}>
            <div className="CommonEntranceContainer">
                <LoginHeader />
                {
                    (loginStateContext === "methods" ? <LoginMethodsContainer /> :
                        (loginStateContext === "loginform" ? <LoginForm /> : null)
                    )
                }
                <LoginFooter />
            </div>
        </LoginStateContext.Provider>
    )
}

export default LoginScene