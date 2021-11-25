import './App.css';


function App(props) {
  return (
    <div className="App">
      <p className="p_text">Текст из константы - 
        <h1 className="h1_text">{props.text}</h1>
      </p>
    </div>
  );
 }

export default App;