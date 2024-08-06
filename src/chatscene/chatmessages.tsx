import './chatmessages.css'
import { useContext } from 'react'
import { ChatMessagesContext } from './ChatMessagesContext'

function ChatMessages(){
    const inheritedNewMessages = useContext(ChatMessagesContext)
    const newMessagesList = inheritedNewMessages.messageList
    return(
        <div className="ChatComponent-messages">
            {newMessagesList}
        </div>
    )
}

export default ChatMessages