import {useState} from 'react';
import { Container, List, ListItem, ListItemText} from '@mui/material';

function Chats(props) {
    const [ChatsList, setChatsList] = useState([{id: '1', name: 'Artur'},{id: '2', name: 'Kriss'},{id: '3', name: 'Mike'}]);

    return (
        <div className="Chats">
          <Container className="p_text">
            <h1 className="h1_text">Чаты</h1>
          </Container>
          <Container>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} >
              {       
                  ChatsList.map((item)=> 
                      <ListItem key={ChatsList.indexOf(item)}>
                          <ListItemText
                              primary={item.name}
                              secondary={item.name}/>
                      </ListItem >)
              }
          </List>
          </Container>
        </div>
      );
}

export default Chats;