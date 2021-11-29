import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Message from './components/Message';

ReactDOM.render(
 <React.StrictMode>
    <Message text={'Text for Message'} />
 </React.StrictMode>,
 document.getElementById("root")
);

