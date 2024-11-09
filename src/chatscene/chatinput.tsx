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
                "покажи": '🌰<iframe width="853" height="480" src="https://www.youtube.com/embed/oMCu0vfNVao" title="Tanki Online, Easter Egg?" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>',
                "орех": '🌰<iframe width="853" height="480" src="https://www.youtube.com/embed/oMCu0vfNVao" title="Tanki Online, Easter Egg?" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>',
                "я не виновен": "Мы рассмотрели вашу заявку и провели дополнительную проверку. По её итогам ваш аккаунт подлежит восстановлению. Ожидайте в течении 24 часов. Просим прощения за предоставленные неудобства.",
                "unban": "Мы рассмотрели вашу заявку и провели дополнительную проверку. По её итогам ваш аккаунт подлежит восстановлению. Ожидайте в течении 24 часов. Просим прощения за предоставленные неудобства."
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

            let moderatorGeneratedAnswer = <ChatMessage key={messageList.length+2} author="moderator" message="Ваш запрос не был понят. Переформулируйте его и попробуйте снова." />;

            const regex = new RegExp(Object.keys(replies).join("|"), "gi");
            if (inputField!.value.match(regex)){
                for (const [key, value] of Object.entries(replies)){
                    if (inputField!.value.toLowerCase().includes(key)){
                        moderatorGeneratedAnswer = <ChatMessage key={messageList.length+2} author="moderator" message={value} />
                    }
                }
            }
            
            setMessageList(
                messageList.concat(
                    userInputedQuestion,
                    moderatorGeneratedAnswer
                )
            )
            
            inputField!.classList.add("ChatComponent-inputFieldAwait")

            if (moderatorGeneratedAnswer?.props["message"].match(/Мы/g)){
                setTimeout(() => {
                    location.reload();
                }, 10000)
            } else {
                setTimeout(() => {
                    inputField!.setAttribute("class", "ChatComponent-inputField");
                }, 3000);
            }
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