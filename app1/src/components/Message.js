import {useState} from 'react';


function Message(props) {

    const [MessageList, setMessageList] = useState([]);
    const [value, setValue] = useState('');

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
            const copyMessageList = [...MessageList];
            copyMessageList.push({
                author: 'Автор',
                text:value,
            })
            setMessageList(copyMessageList);
    }

    return (
      <div className="App">
        <p className="p_text">
          <h1 className="h1_text">{props.text}</h1>
        </p>
        <div>
        <div className="MesList">
            {       
                MessageList.map((item)=> <div>{item.text}</div>)
            }
        </div>
        <form onSubmit={onSubmit} action="" className="form">
            <input className="input" type='text' onChange={onChange} value={value}></input>
            <button className="submit" type="submit">Отправить</button>
        </form>
        </div>
      </div>
    );
   }
  
  export default Message;