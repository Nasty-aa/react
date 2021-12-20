import { ADD_MESSAGE, ADD_MESSAGE_ID, DEL_MESSAGE_ID } from "./action";

const initialState ={
    messageList: {
        id1: {
          name: "Артур",
          messages: [{ text: "Это первый чат", author: 'user'},{ text: "Замечательно!", author: 'robot'}],
        },
        id2: {
          name: "Крис",
          messages: [{ text: "Это второй чат!", author: 'robot'},{ text: "ОК", author: 'user'}],
        },
        id3: {
            name: "Майк",
            messages: [{ text: "Это третий чат!!", author: 'robot'}],
          },
      },
};

const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const currentId = action.chatid.id;
            const copyState = state;
            copyState.messageList[currentId].messages.push({
                text: action.chatid.message,
                author: action.chatid.author,
            })
            return copyState;
        }
        case ADD_MESSAGE_ID: {
            const currentId = 'id' + action.idChat;
            const copyState = state;
            copyState.messageList[currentId] = {
                name: action.author,
                messages: [],
            }
            return copyState;
        }
        case DEL_MESSAGE_ID: {
            const currentId = 'id' + action.idChat;
            const copyState = state;
            delete copyState.messageList[currentId];
            console.log(copyState);
            return copyState;
        }
        default:
            return state;
    }
};

export default chatsReducer;