import './chatinput.css'
import { ChatMessagesContext } from './ChatMessagesContext'
import { useContext } from 'react'
import ChatMessage from './chatmessage'

function ChatInput(){
    const inheritedNewMessages = useContext(ChatMessagesContext)
    const setMessageList = inheritedNewMessages.setMessageList
    const messageList = inheritedNewMessages.messageList
    function handleInputButtonClick(){
        if (document.querySelector<HTMLInputElement>("input.ChatComponent-inputField")!.value != ""){
            setMessageList(messageList.concat(<ChatMessage key={messageList.length+1} author="user" message={document.querySelector<HTMLInputElement>(".ChatComponent-inputField")!.value} />))
            const userInputedQuestion = <ChatMessage key={messageList.length+1} author="user" message={document.querySelector<HTMLInputElement>(".ChatComponent-inputField")!.value} />
            const moderatorGeneratedAnswer = (
                document.querySelector<HTMLInputElement>("input.ChatComponent-inputField")!.value.toLowerCase().includes("почему") ||
                document.querySelector<HTMLInputElement>("input.ChatComponent-inputField")!.value.toLowerCase().includes("причина")
            ) ? <ChatMessage key={messageList.length+2} author="moderator" message="потому что" />
            : <ChatMessage key={messageList.length+2} author="moderator" message="Ваш запрос не был понят. Переформулируйте его и попробуйте снова." />
            setMessageList(messageList.concat(userInputedQuestion, moderatorGeneratedAnswer))
            document.querySelector<HTMLInputElement>(".ChatComponent-inputField")!.classList.add("ChatComponent-inputFieldAwait")
            setTimeout(() => {
                document.querySelector<HTMLInputElement>(".ChatComponent-inputField")!.setAttribute("class", "ChatComponent-inputField");
            }, 3000);
        }
        document.querySelector<HTMLInputElement>(".ChatComponent-inputField")!.value = ""
    }
    return(
        <div className="ChatComponent-input">
            <img src="/src/assets/user.png" className='ChatComponent-inputProflePicture'/>
            <input type="text" placeholder="Введите текст" className="ChatComponent-inputField" />
            <button className="ChatComponent-sendButton" onClick={handleInputButtonClick}></button>
        </div>
    )
}

export default ChatInput