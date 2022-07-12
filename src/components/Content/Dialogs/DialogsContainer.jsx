import {connect} from "react-redux";
import {deleteMessage, sendMessage} from "../../../redux/dialogs-reducer/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    return (
        <div>
            <Dialogs {...props}/>
        </div>
    )
};

const mapStateToProps = (state) => ({
    dialogs: state.dialogsData.dialogs,
    messages: state.dialogsData.messages
});

const mapDispatchToProps = (dispatch) => ({
    sendMessage : (newMessageBody) => {
        dispatch(sendMessage(newMessageBody));
    },
    deleteMessage : (messageId) => {
        dispatch(deleteMessage(messageId));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(DialogsContainer);