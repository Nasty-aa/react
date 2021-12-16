import React from 'react';
import Message from './Message';
import ChatsList from './ChatsList';
import {Route, Switch} from 'react-router-dom';


function Chats(props) {

      return (
          <div className="Chats">
            <ChatsList />
            <div>
                <Switch>
                    <Route path='/Chat/:chatId'>
                            <Message />
                    </Route>
                </Switch>
            </div>
          </div>
          
        );
  }
  
  export default Chats;