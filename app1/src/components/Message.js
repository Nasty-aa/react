import {useCallback, useEffect,useState} from 'react';
import {TextField, Container, List, ListItem, ListItemText, Button} from '@mui/material';
import {useRouteMatch, Redirect, Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getMessage} from '../store/message/selectors';
import {useDispatch} from "react-redux";
import {offTrackingMessage, pushMessageToFb, onTrackingMessage, resetCurrentMessages} from '../store/message/action'


function Message() {

    const dispatch = useDispatch();
    const { url } = useRouteMatch();
    const ArrUrl = url.split('/');
    const ChatId = ArrUrl[ArrUrl.length-1];
    useEffect (()=>{
        dispatch(resetCurrentMessages(ChatId));
    }, [])
    const [value, setValue] = useState('');
    const [input, setInput] = useState('');
    const messages = (useSelector(getMessage));
    const MessageList1 = messages[ChatId]['messages'];
    const Author = messages[ChatId]['name'];
    const currentChat = messages[ChatId];
    
    const onSave = (message) => {
        dispatch(pushMessageToFb(message));
    }

    const onChange = (event) => {
        setValue(event.target.value);
        setInput(event.target);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const message = {
            ChatId: ChatId,
            author: 'user',
            value: value,
        }
        onSave(message);
        setValue('');
        input.focus();
    }

    useEffect (() => {
        dispatch(onTrackingMessage(ChatId));
        return () => {
            dispatch(offTrackingMessage(ChatId));
        }
    },[]);


    if (!ChatId || !currentChat) {
        return <Redirect to="/nochat" />;
      }

    return (
      <div className="App">
        <Container className="p_text">
            <Link to="/Chat" className="Message_link">Список чатов</Link>
            <h1 className="h1_text">{Author}</h1>
        </Container>
        <Container>
        <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }} className="MesList">
            {       
                MessageList1.map((item)=> 
                    <ListItem key={MessageList1.indexOf(item)}>
                        <ListItemText
                            primary={item.author === "user" ? "Вы":"Дружелюбный робот"}
                            secondary={item.text}/>
                    </ListItem >)
            }
        </List>
        <form onSubmit={onSubmit} action="#" className="form">
            <TextField  variant="outlined" className="input" type="text" onChange={onChange} value={value} autoFocus  />
            <Button className="submit" type="submit" variant="outlined" >Отправить</Button>
        </form>
        </Container>
      </div>
    );
   }
  
  export default Message;