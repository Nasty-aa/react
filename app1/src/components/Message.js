import {useEffect,useState} from 'react';
import { TextField, Container, List, ListItem, ListItemText, Button} from '@mui/material';
import {useRouteMatch, Redirect, Link} from 'react-router-dom';


function Message(props) {
    
    const { url } = useRouteMatch();
    const ArrUrl = url.split('/');
    const ChatId = ArrUrl[ArrUrl.length-1];
    const [MessageList, setMessageList] = useState(props.chats[ChatId]['messages']);
    const [value, setValue] = useState('');
    const [input, setInput] = useState('');
    
    const onChange = (event) => {
        setValue(event.target.value);
        setInput(event.target);
    }

    const onSubmit = (event) => {
        if(value) {
            event.preventDefault();
            const copyMessageList = [...MessageList];
            copyMessageList.push({
                author: 'user',
                text:value,
            })
            setMessageList(copyMessageList);
            setValue('');
            input.focus();
        }
    }

    useEffect(()=>{

        if(MessageList.length !== 0){
            if(MessageList[MessageList.length-1].author === 'user'){
            
            const timerId = setTimeout(()=>{
                const copyMessageList = [...MessageList];
                copyMessageList.push({
                    author: 'robot',
                    text: 'Дождитесь ответа оператора',
                })
                setMessageList(copyMessageList);
            },1500)

            return () => {
                clearTimeout(timerId);
              }
        }}
    },[MessageList])

    if (!ChatId || !props.chats[ChatId]) {
        return <Redirect to="/nochat" />;
      }

    return (
      <div className="App">
        <Container className="p_text">
            <Link to='/Chat' className="Message_link">Список чатов</Link>
            <h1 className="h1_text">{props.chats[ChatId]['name']}</h1>
        </Container>
        <Container>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} className="MesList">
            {       
                MessageList.map((item)=> 
                    <ListItem key={MessageList.indexOf(item)}>
                        <ListItemText
                            primary={item.author === 'user' ? 'Вы':'Дружелюбный робот'}
                            secondary={item.text}/>
                    </ListItem >)
            }
        </List>
        <form onSubmit={onSubmit} action="#" className="form">
            <TextField  variant="outlined" className="input" type='text' onChange={onChange} value={value} autoFocus  />
            <Button className="submit" type="submit" variant="outlined" >Отправить</Button>
        </form>
        </Container>
      </div>
    );
   }
  
  export default Message;