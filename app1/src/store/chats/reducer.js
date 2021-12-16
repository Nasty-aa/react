import { ADD_CHAT, DELETE_CHAT } from "./action";

const initialState = {
    chatList: [{id: 1, name: 'Artur'},{id: 2, name: 'Kriss'},{id: 3, name: 'Mike'}]
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
                    },
                ]
            }
        }
        case DELETE_CHAT: {
            return {
                chatList: state.chatList.filter((chat) => chat.id != action.chatId)
            }
        }
        default:
            return state;
    }
};

export default chatReducer;