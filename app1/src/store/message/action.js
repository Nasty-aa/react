import {db} from '../../services/firebase';

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const ADD_MESSAGE_ID = 'ADD_MESSAGE_ID';
export const DEL_MESSAGE_ID = 'DEL_MESSAGE_ID';
export const RESET_MESSAGES = 'RESET_MESSAGES';
export const RESET_CURRENT_MESSAGES = 'RESET_CURRENT_MESSAGES';

export const addMessage = (chatId, author, message) =>({
    type: ADD_MESSAGE,
    chatid: chatId,
    author: author,
    message: message,
})

export const addMessageByID = (newChat) =>({
    type: ADD_MESSAGE_ID,
    chat: newChat,
});

export const delMessageByID = (idChat) =>({
    type: DEL_MESSAGE_ID,
    idChat: idChat,
});

export const pushMessageToFb = (newMessage) => () => {
    const valueMes = newMessage.value;
    db.ref(`chats/${newMessage.ChatId}/messages`).push({message: valueMes});
}

export const onTrackingMessage = (chatId) => (dispatch) => {
    db.ref(`chats/${chatId}/messages`).on('child_added', (snapshot) => {
        dispatch(addMessage({
            id: chatId,
            author: 'user',
            message: snapshot.val().message,
        }))
    })
}

export const offTrackingMessage = (chatId) => () =>{
    db.ref(`chats/${chatId}/messages`).on('child_added');
}


export const resetMessages = () => ({
    type: RESET_MESSAGES,
    message: []
})

export const resetCurrentMessages = (chatId) => ({
    type: RESET_CURRENT_MESSAGES,
    id: chatId,
    message: [],
})