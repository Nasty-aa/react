import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Message = (props) => {
  return <p className="p_text">Текст из константы - <h1 className="h1_text">{props.text}</h1></p>
}



ReactDOM.render(
 <React.StrictMode>
   {/* <App text={text} /> */}
   <Message text={'Text for Message'}/>
 </React.StrictMode>,
 document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
