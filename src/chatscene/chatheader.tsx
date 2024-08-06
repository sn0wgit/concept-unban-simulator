import './chatheader.css'
import { useState } from 'react'

function ChatHeader(){
    const moderatorAgentID = useState(Math.floor(Math.random() * 200))
    return(
        <header className="ChatComponent-chatWindowHeader">
            <h1 className='ChatComponent-chatWindowHeading'>Агент Поддержки Танков Онлайн #{moderatorAgentID[0]}</h1>
            <div className='ChatComponent-chatWindowHeaderLinks'>
                <a href="///tankionline.com/ru/eula" target="_blank">Лицензионное соглашение</a>
                <a href="///tankionline.com/ru/gamerules" target="_blank">Правила игры</a>
            </div>
        </header>
    )
}

export default ChatHeader