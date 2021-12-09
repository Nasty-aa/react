import React from 'react';
import Message from './Message';
import {useState} from 'react';
import ChatsList from './ChatsList';
import {Route, Switch} from 'react-router-dom';

const initialChats = {
    id1: {
      name: "Артур",
      messages: [{ text: "Это первый чат", author: 'user'},{ text: "Замечательно!", author: 'robot'}],
    },
    id2: {
      name: "Крис",
      messages: [{ text: "Это второй чат!", author: 'robot'},{ text: "ОК", author: 'user'}],
    },
    id3: {
        name: "Майк",
        messages: [{ text: "Это третий чат!!", author: 'robot'}],
      },
  };


function Chats(props) {
    const [chats, setChats] = useState(initialChats);

      return (
          <div className="Chats">
            <ChatsList />
            <div>
                <Switch>
                    <Route path='/Chat/:chatId'>
                            <Message  chats={chats}/>
                    </Route>
                </Switch>
            </div>
          </div>
          
        );
  }
  
  export default Chats;