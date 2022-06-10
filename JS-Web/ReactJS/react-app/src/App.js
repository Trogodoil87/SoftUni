import './App.css';
import React from 'react';
import Item from './components/Item.js'

function App() {
  let [count, setCount] = React.useState(1);
  let [result, setResult] = React.useState();
 
  const onAddButton = () => { setCount(count + 1) };
  const onClickResultButton = () => { setResult(count + count) };

  return (
    <div className="App">
      <p>

        <Item>Hi</Item>
        <Item>{count} + {count} = {result}</Item>
        <button onClick={onAddButton}>Add</button>
        <button onClick={onClickResultButton}>Result</button>
      </p>

    </div>
  );
}

export default App;
