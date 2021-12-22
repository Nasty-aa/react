import thunk from 'redux-thunk';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import chatReducer from './chats/reducer';
import profileReducer from './profile/reducer';
import messageReducer from './message/reducer';
import {gistsReducer} from './gists/reducer';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
}

export const rootReducer = combineReducers({
    chats: chatReducer,
    profile: profileReducer,
    message: messageReducer,
    gists: gistsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
)

export const persistor = persistStore(store);