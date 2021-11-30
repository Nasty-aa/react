import {useEffect,useState} from 'react';


function Message(props) {

    const [MessageList, setMessageList] = useState([]);
    const [value, setValue] = useState('');

    const onChange = (event) => {
        setValue(event.target.value);
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

    return (
      <div className="App">
        <div className="p_text">
          <h1 className="h1_text">{props.text}</h1>
        </div>
        <div>
        <div className="MesList">
            {       
                MessageList.map((item)=> <div><div className={item.author}><p>{item.author === 'user' ? 'Вы':'Дружелюбный робот'}</p>{item.text}</div></div>)
            }
        </div>
        <form onSubmit={onSubmit} action="#" className="form">
            <input className="input" type='text' onChange={onChange} value={value}></input>
            <button className="submit" type="submit">Отправить</button>
        </form>
        </div>
      </div>
    );
   }
  
  export default Message;