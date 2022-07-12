const SEND_MESSAGE = "SEND_MESSAGE";
const DELETE_MESSAGE = "DELETE_MESSAGE";

const initialState = {
    dialogs: [
        {id: 1, name: 'Daniel'},
        {id: 2, name: 'Denis'},
        {id: 3, name: 'John'},
        {id: 4, name: 'Jo Jo'}
    ],
    messages: [{id: 1, message: 'Hello!'}]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: state.messages.length + 1, message: body}]
            }
        case DELETE_MESSAGE:
            return {
                ...state,
                messages: state.messages.filter(m => m.id !== action.messageId)
            }
        default:
            return state
    }
};

export const sendMessage = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});
export const deleteMessage = (messageId) => ({type: DELETE_MESSAGE, messageId});

export default dialogsReducer;