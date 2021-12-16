export const getMessageReducer = (state) => state.message;
export const getMessage = (state) => getMessageReducer(state).messageList;
export const getMessageById = (idChat) => (state) => getMessage(state)[idChat];