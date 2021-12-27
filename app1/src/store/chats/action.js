import {chatsRef} from '../../services/firebase';
import {addMessageByID, delMessageByID} from '../message/action';
export const ADD_CHAT = 'ADD_CHAT'
export const DELETE_CHAT = 'DELETE_CHAT'
export const RESET_CHAT = 'RESET_CHAT'

export const addChat = (name,id, key) =>({
    type: ADD_CHAT,
    name,
    id,
    key,
})

export const delChat = (chatId) =>({
    type: DELETE_CHAT,
    chatId,
})

export const pushChatsToFb = (chats) => () => {
    chatsRef.push(chats, (error) => {
        console.log(error);
    })
}

export const onTrackingChats = (dispatch) => {
    chatsRef.on('child_added', (snapshot) => {
        dispatch(addChat({
            name: snapshot.val().name,
            id: snapshot.val().id,
            idFb: snapshot.key,
        }));
        dispatch(addMessageByID({
            author: snapshot.val().name,
            idChat: snapshot.key,
        }));
    })
}

export const offTrackingChats = () => {
    chatsRef.on('child_added');
}

export const removeChatFromFb = (chatId) => () =>{
    chatsRef.child(chatId).remove((error) => {
        console.log(error);
    })
}

export const onTrackingRemovedChat = (dispatch) => {
    chatsRef.on('child_removed', (snapshot) => {
        dispatch(delChat(
            snapshot.val().id
        ));
        dispatch(delMessageByID(snapshot.key));
    })
}

export const offTrackingRemovedChat = () => {
    chatsRef.on('child_removed');
}

export const resetChats = () => ({
    type: RESET_CHAT,
    chatList: []
})