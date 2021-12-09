import { Container, List, ListItem, ListItemText} from '@mui/material';
import {Link} from 'react-router-dom';
import {useState} from 'react';



function ChatList(props) {
  const [ChatsList, setChatsList] = useState([{id: '1', name: 'Artur'},{id: '2', name: 'Kriss'},{id: '3', name: 'Mike'}]);

    return (
        <div className="Chats">
          <Container className="p_text">
            <h1 className="h1_text">Чаты</h1>
          </Container>
          <Container className="ChatsList">
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', height: 500 }} >
              {       
                  ChatsList.map((item)=> 
                    <ListItem key={item.id}>
                      <Link to={`/Chat/id${item.id}`} className="chatsList_a">
                        <ListItemText
                            primary={item.name}/>
                      </Link>
                    </ListItem >)
              }
          </List>
          </Container>
        </div>
      );
}

export default ChatList;