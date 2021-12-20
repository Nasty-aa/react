export const ADD_MESSAGE = "ADD_MESSAGE";
export const ADD_MESSAGE_ID = "ADD_MESSAGE_ID";
export const DEL_MESSAGE_ID = "DEL_MESSAGE_ID";

export const addMessage = (chatId, author, message) =>({
    type: ADD_MESSAGE,
    chatid: chatId,
    author: author,
    message: message,
});

export const addMessageWithThunk = (idChat, author, value) => (dispatch) => {
    dispatch(addMessage({
        id: idChat,
        author: author,
        message: value,
      }));
      if(author !== 'robot' ){
            dispatch(addMessage({
                id: idChat, 
                author: 'robot',
                message:'Дождитесь ответа оператора',
            }));
      }
}

export const addMessageByID = (newChat) =>({
    type: ADD_MESSAGE_ID,
    idChat: newChat.id,
    author: newChat.name,
});

export const delMessageByID = (idChat) =>({
    type: DEL_MESSAGE_ID,
    idChat: idChat,
});