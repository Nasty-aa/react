export const ADD_CHAT = "ADD_CHAT"
export const DELETE_CHAT = "DELETE_CHAT"

export const addChat = (name,id) =>({
    type: ADD_CHAT,
    name,
    id,
})

export const delChat = (chatId) =>({
    type: DELETE_CHAT,
    chatId,
})