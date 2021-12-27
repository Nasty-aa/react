import { ADD_MESSAGE, ADD_MESSAGE_ID, DEL_MESSAGE_ID, RESET_MESSAGES, RESET_CURRENT_MESSAGES} from './action';

const initialState ={
    messageList: {}
};

const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const copyState = state;
            copyState.messageList[action.chatid.id].messages.push({
                text: action.chatid.message,
                author: action.chatid.author,
            })
            return copyState;
        }
        case ADD_MESSAGE_ID: {
            const copyState = state;
            copyState.messageList[action.chat.idChat] = {
                name: action.chat.author,
                messages: [],
                idChat: action.chat.idChat,
            }
            return copyState;
        }
        case DEL_MESSAGE_ID: {
            const copyState = state;
            delete copyState.messageList[action.idChat];
            return copyState;
        }
        case RESET_MESSAGES: {
            return {
                messageList: action.message,
            }
        }
        case RESET_CURRENT_MESSAGES: {
            const copyState = state;
            copyState.messageList[action.id].messages = action.message;
            return copyState;
        }
        default:
            return state;
    }
};

export default chatsReducer;