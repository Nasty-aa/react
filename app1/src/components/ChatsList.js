import {Container, List, ListItem, ListItemText, IconButton } from '@mui/material';
import {Link} from 'react-router-dom';
import {getChatList} from '../store/chats/selectors';
import {useSelector} from 'react-redux';
import AddChats from './AddChats';
import {useDispatch} from "react-redux";
import {addChat, delChat} from '../store/chats/action';
import {addMessageByID, delMessageByID} from '../store/message/action';
import DeleteIcon from '@mui/icons-material/Delete';
import {nanoid} from 'nanoid'

const mapStateToProps = (state) => {
  return {
    ChatsList: getChatList(state),
  }
}

const mapDispatchToProps = {
  delChat
}

function ChatList() {

  const dispatch = useDispatch();
  const ChatsList = useSelector(getChatList);
  
  const onSaveChat = (value) => {
    const newChat = {
      name: value,
      id: nanoid(),
    }
    if(value){
      dispatch(addChat(newChat));
      dispatch(addMessageByID(newChat));
    }
}

    return (
        <div className="Chats">
          <Container className="p_text">
            <h1 className="h1_text">Чаты</h1>
          </Container>
          <AddChats onSaveChat={onSaveChat} />
          <Container className="ChatsList">
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', height: 500 }} >
              {       
                  ChatsList.map((item)=> 
                    <ListItem key={item.id}>
                      <Link to={`/Chat/id${item.id}`} className="chatsList_a">
                        <ListItemText
                            primary={item.name}/>
                      </Link>
                      <IconButton aria-label="delete" color='primary' onClick={() => {
                          dispatch(delChat(item.id));
                          dispatch(delMessageByID(item.id));
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