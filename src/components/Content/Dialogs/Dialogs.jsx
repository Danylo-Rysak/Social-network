import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";
import s from "../Profile/Profile.module.css";

const Dialogs = (props) => {
    return (
        <div className={s.profile}>
            <Dialog dialogs={props.dialogs}/>
            <Messages messages={props.messages} sendMessage={props.sendMessage} deleteMessage={props.deleteMessage}/>
        </div>
    )
};

export default Dialogs;