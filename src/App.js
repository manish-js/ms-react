import React, {useState} from 'react';
import Button from './components/Button';
import Display from './components/Display';

function App() {
  const [counter, setCounter] = useState(0);

  // Event handler for Increment Counter
  const incrementCounter = () => setCounter(counter + 1);

  // Event handler for Decrement Counter
  const decrementCounter = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  }

  return (
    <div className="App">
      <div className="centerDiv">
        <Display value={counter} />
        <Button click={incrementCounter} text="Increment"/> &nbsp;
        <Button click={decrementCounter} text="Decrement"/>
      </div>
    </div>
  );
}

export default App;
