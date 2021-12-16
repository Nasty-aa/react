export const ADD_MESSAGE = "ADD_MESSAGE";

export const addMessage = (chatId, author, message) =>({
    type: ADD_MESSAGE,
    chatid: chatId,
    author: author,
    message: message,
});