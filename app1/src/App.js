import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        Текст Выводится
        <h3>Hello, {props.text}</h3>
      </header>
    </div>
  );
 }

export default App;