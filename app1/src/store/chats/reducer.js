import { ADD_CHAT, DELETE_CHAT, RESET_CHAT} from './action';

const initialState = {
    chatList: []
};

const chatReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_CHAT: {
            return {
                ...state,
                chatList:[
                    ...state.chatList,
                    {
                        id: action.name.id,
                        name: action.name.name,
                        key: action.name.idFb,
                    },
                ]
            }
        }
        case DELETE_CHAT: {
            return {
                chatList: state.chatList.filter((chat) => chat.id != action.chatId)
            }
        }
        case RESET_CHAT: {
            return {
                chatList: action.chatList
            }
        }
        default: {
            return state;
        }
    }
};

export default chatReducer;