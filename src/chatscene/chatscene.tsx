import './chatscene.css'
import ChatHeader from './chatheader'
import ChatInput from './chatinput'
import ChatMessages from './chatmessages'
import ChatMessage from './chatmessage'
import { useState, useContext } from 'react'
import { ChatMessagesContext } from './ChatMessagesContext'
import { UsernameContext } from '../UsernameContext'

function ChatScene(){
    const inheritedUsernameContext = useContext(UsernameContext)
    const userName = inheritedUsernameContext.username
    const [messageList, setMessageList] = useState([
        <ChatMessage key="0" author="" message={`${userName}! Ваш аккаунт заблокирован. Причина: п. 2.5 Правил игры. Использование программ и иных средств, которые могут давать игроку искусственное преимущество в бою, имитировать его действия, автоматизировать игровой процесс или ухудшить функционирование игры, электронных устройств третьих лиц. Если вы уверены, что мы ошиблись — подайте аппеляцию.`}/>,
        <ChatMessage key="1" author="" message="Вы начали общение с модератором." />]);
    const value = {messageList, setMessageList}

    return(
        <ChatMessagesContext.Provider value={value}>
            <div className="ChatComponent-chatWindow">
                <ChatHeader />
                <ChatMessages />
                <ChatInput />
            </div>
        </ChatMessagesContext.Provider>
    )
}

export default ChatScene