import './App.css';
import React from 'react';
import Item from './components/Item.js'

function App() {
  let [count, setCount] = React.useState(1);
  let [result, setResult] = React.useState();
  let [name, setName] = React.useState('Guest');

  const onAddButton = () => { setCount(count + 1) };
  const onClickResultButton = () => { setResult(count + count) };
  const changeNameHandler = (e) => {
    setName(e.target.value);
    e.target.value = ''
  }

  return (
    <div className="App">
      <p>

        <Item>Hi, {name}</Item>
        <Item>{count} + {count} = {result}</Item>
        <button onClick={onAddButton}>Add</button>
        <button onClick={onClickResultButton}>Result</button>
        <input type="text" onBlur={changeNameHandler}/>
      </p>

    </div>
  );
}

export default App;
