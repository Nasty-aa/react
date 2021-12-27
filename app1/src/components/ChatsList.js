import {Container, List, ListItem, ListItemText, IconButton } from '@mui/material';
import {Link} from 'react-router-dom';
import {getChatList} from '../store/chats/selectors';
import {useSelector} from 'react-redux';
import AddChats from './AddChats';
import {useDispatch} from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';
import {nanoid} from 'nanoid'
import {pushChatsToFb, onTrackingChats, offTrackingChats, removeChatFromFb, onTrackingRemovedChat, offTrackingRemovedChat, resetChats} from '../store/chats/action';
import {useEffect, useState} from 'react';
import {resetMessages} from '../store/message/action';
 
function ChatList() {

  useEffect (()=>{
    dispatch(resetChats());
    dispatch(resetMessages());
  }, [])

  const dispatch = useDispatch();
  const ChatsList = useSelector(getChatList);
  
  const onSaveChat = (value) => {
    const newChat = {
      name: value,
      id: nanoid(),
      messages: [],
    }
    
    if(value){
      dispatch(pushChatsToFb(newChat));
    }
  }

    useEffect (() => {
      dispatch(onTrackingChats);
      dispatch(onTrackingRemovedChat);
      return () => {
        dispatch(offTrackingChats);
        dispatch(offTrackingRemovedChat);
      }
    },[]);

    return (
        <div className="Chats">
          <Container className="p_text">
            <h1 className="h1_text">Чаты</h1>
          </Container>
          <AddChats onSaveChat={onSaveChat} />
          <Container className="ChatsList">
          <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper", height: 500 }} >
              {       
                  ChatsList.map((item)=> 
                    <ListItem key={item.key}>
                      <Link to={`/Chat/${item.key}`} className="chatsList_a">
                        <ListItemText
                            primary={item.name}/>
                      </Link>
                      <IconButton aria-label="delete" color="primary" onClick={() => {
                          dispatch(removeChatFromFb(item.key));
                        }}>
                        <DeleteIcon />
                      </IconButton>
                    </ListItem >)
              }
          </List>
          </Container>
        </div>
      );
}

export default ChatList;