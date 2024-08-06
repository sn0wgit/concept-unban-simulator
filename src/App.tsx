import './App.css'
import ErrorScene from './errorscene/errorscene'
import LoginScene from './loginscene/loginscene';
import ChatScene from './chatscene/chatscene';
import { SceneContext } from './SceneContext';
import { UsernameContext } from './UsernameContext';
import { useState } from 'react';

function App() {
  const [sceneContext, setSceneContext] = useState("login")
  const [username, setUsername] = useState("")
  const newSceneContextName = (name:string) => setSceneContext(name)
  const newUsernameContextName = (name:string) => setUsername(name)

  return (
    <SceneContext.Provider value={newSceneContextName}>
      <UsernameContext.Provider value={{username, newUsernameContextName}}>
        <div className="Common-container Common-background">
          {
            (sceneContext === "login" ? <LoginScene /> :
              (sceneContext === "error" ? <ErrorScene /> : 
               (sceneContext === "appeal" ? <ChatScene /> : null))
            )
          }
        </div>
      </UsernameContext.Provider>
    </SceneContext.Provider>
  )
}

export default App
