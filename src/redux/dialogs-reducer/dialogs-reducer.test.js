import dialogsReducer, {sendMessage} from "./dialogs-reducer";


let state = {
    messages: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Click it!'},
        {id: 4, message: 'See you!'},
        {id: 5, message: 'Bye!'}
    ]
};

it("message should be correct", () => {
    let action = sendMessage("correct");
    let newState = dialogsReducer(state, action);
    expect(newState.messages[5].message).toBe("correct");
});