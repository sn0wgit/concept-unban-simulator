import './chatinput.css'
import { ChatMessagesContext } from './ChatMessagesContext'
import { useContext } from 'react'
import ChatMessage from './chatmessage'

function ChatInput(){
    const inheritedNewMessages = useContext(ChatMessagesContext)
    const setMessageList = inheritedNewMessages.setMessageList
    const messageList = inheritedNewMessages.messageList

    function handleInputButtonClick(){

        const inputField = document.querySelector<HTMLInputElement>("input.ChatComponent-inputField");

        if (inputField!.value != ""){
            const replies = {
                "почему": "потому что",
                "причина": "потому что",
                "я не виновен": "Мы рассмотрели вашу заявку и согласны с вашим мнением. Ваш аккаунт будет восстановлен в течении 24 часов. Просим прощения за предоставленные неудобства.",
                "unban": "Мы рассмотрели вашу заявку и согласны с вашим мнением. Ваш аккаунт будет восстановлен в течении 24 часов. Просим прощения за предоставленные неудобства."
            }

            setMessageList(
                messageList.concat(
                    <ChatMessage
                        key={messageList.length+1}
                        author="user"
                        message={
                            inputField!.value
                        }
                    />
                )
            )
            const userInputedQuestion = <ChatMessage
                key={messageList.length+1}
                author="user"
                message={
                    inputField!.value
                }
            />

            let moderatorGeneratedAnswer = undefined;

            const regex = new RegExp(Object.keys(replies).join("|"), "gi");
            if (inputField!.value.match(regex)){
                for (const [key, value] of Object.entries(replies)){
                    if (inputField!.value.toLowerCase().includes(key)){
                        moderatorGeneratedAnswer = <ChatMessage key={messageList.length+2} author="moderator" message={value} />
                    }
                }
            } else {
                moderatorGeneratedAnswer = <ChatMessage key={messageList.length+2} author="moderator" message="Ваш запрос не был понят. Переформулируйте его и попробуйте снова." />
            }
            
            setMessageList(
                messageList.concat(
                    userInputedQuestion,
                    moderatorGeneratedAnswer
                )
            )
            
            inputField!.classList.add("ChatComponent-inputFieldAwait")
            setTimeout(() => {
                inputField!.setAttribute("class", "ChatComponent-inputField");
            }, 3000);
        }
        inputField!.value = ""
    }
    return(
        <div className="ChatComponent-input">
            <img src="/public/user.png" className='ChatComponent-inputProflePicture'/>
            <input type="text" placeholder="Введите текст" className="ChatComponent-inputField" />
            <button className="ChatComponent-sendButton" onClick={handleInputButtonClick}></button>
        </div>
    )
}

export default ChatInput