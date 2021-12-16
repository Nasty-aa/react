import {createStore, combineReducers} from 'redux';
import chatReducer from './chats/reducer';
import profileReducer from './profile/reducer';
import messageReducer from './message/reducer';


export const store = createStore(
    combineReducers({
        chats: chatReducer,
        profile: profileReducer,
        message: messageReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);
