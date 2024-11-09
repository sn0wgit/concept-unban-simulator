import './chatmessage.css'

interface Props{
    author: string,
    message: string
}

function ChatMessage({author, message}: Props){

    const authorToClass:Record<string, string> = {
        "user": "ChatComponent-messagesMessage ChatComponent-messagesMessageUser",
        "moderator": "ChatComponent-messagesMessage ChatComponent-messagesMessageModerator"
    }

    const authorToImage:Record<string, string> = {
        "user": "/public/user.png",
        "moderator": "/public/moderator.png"
    }

    function getClass(author: string){
        if (Object.keys(authorToClass).includes(author)) {
            return authorToClass[author]
        }
        return "ChatComponent-messagesMessage ChatComponent-messagesStatusMessage"
    }

    function getImageElement(author: string): JSX.Element | null{
        if (Object.keys(authorToImage).includes(author)) {
            return <img src={authorToImage[author]} className="ChatComponent-messagesMessageAuthorPicture" />
        }
        return null
    }

    return(
        <div className={getClass(author)}>
            {getImageElement(author)}
            <div className="ChatComponent-messagesMessageText" dangerouslySetInnerHTML={{__html: message}}></div>
        </div>
    )
}

export default ChatMessage