import React, {useState} from 'react';
import Button from './components/Button';
import Display from './components/Display';
import Input from './components/form-fields/Input';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [countValue, setCountValue] = useState(0);

  // Setting Value to Increase
  const setCounterValue = (event) => setCountValue(+(event.target.value));

  // Event handler for Increment Counter
  const incrementCounter = () => setCounter(counter + countValue);

  // Event handler for Decrement Counter
  const decrementCounter = () => {
    counter >0 && setCounter(counter - countValue);
  }

  return (
    <div className="App">
      <div className="CenterDiv">
      <Display msg="Enter the value you want to increase or decrease with"/>
      <br />
      <Input countMultiple={countValue} onChange={() => setCounterValue} />
      <br /> <br />
      <Button click={incrementCounter} text="Increment"/> &nbsp;
      <Button click={decrementCounter} text="Decrement"/>
      <br />
      <Display value={counter} />      
      </div>
    </div>
  );
}

export default App;
