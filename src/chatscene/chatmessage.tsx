import './chatmessage.css'

interface Props{
    author: string,
    message: string,
    attachments?: Array<string>
}

function ChatMessage({author, message, attachments}: Props){

    return(
        <div className={
            (author == "user") ? "ChatComponent-messagesMessage ChatComponent-messagesMessageUser" :
            (author == "moderator") ? "ChatComponent-messagesMessage ChatComponent-messagesMessageModerator" : "ChatComponent-messagesMessage ChatComponent-messagesStatusMessage"
        }>
            {author == "user" || author == "moderator" ? <img src={(author == "user") ? "/src/assets/user.png" : "/src/assets/moderator.png"} className="ChatComponent-messagesMessageAuthorPicture" /> : null}
            <div className="ChatComponent-messagesMessageText">{message}</div>
            {author != "user" && author != "moderator" ? <div className="ChatComponent-messagesMessageAttachments" data-attachmentcount={attachments?.length}>{attachments}</div> : null}
        </div>
    )
}

export default ChatMessage