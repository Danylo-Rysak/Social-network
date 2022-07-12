import Message from "./Message/Message";
import s from "../../Profile/Posts/Posts.module.css";
import SendMessageForm from "./SendMessageForm";

const Messages = (props) => {
    let message = [...props.messages].reverse().map(m => <Message id={m.id} message={m.message} key={m.message}
                                                                  deleteMessage={props.deleteMessage}/>);

    return (
        <div>
            <MessagesTitle/>
            <div className={s.posts}>
                <SendMessageForm messages={props.messages} sendMessage={props.sendMessage}/>
                <div>{message}</div>
            </div>
        </div>
    )
};

const MessagesTitle = () => {
    return (
        <div>
            <div className={s.posts__title}>Dialogs</div>
        </div>
    )
};

export default Messages;