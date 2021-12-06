import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Message from './components/Message';
import Chats from './components/ChatsList';
import { Container} from '@mui/material';


ReactDOM.render(
 <React.StrictMode>
    <div className="Container_App">
      <Chats/>
      <Message text={'Messanger'} />
   </div>
 </React.StrictMode>,
 document.getElementById("root")
);

