import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './App'
// import {store} from "./store/index";
import {Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react'
import {persistor,store} from './store/index';

ReactDOM.render(
 <React.StrictMode>
   <Provider store={store}>
    <PersistGate persistor={persistor}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </PersistGate>   
   </Provider>
 </React.StrictMode>,
 document.getElementById("root")
);

