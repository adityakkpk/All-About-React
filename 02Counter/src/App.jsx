import './App.css'
import { useState } from 'react';

function App() {

  // useState is a method which returns an array which has a variable and a function
  // Here, counter is a variable and setcounter is a function which is return in an array by useState()
  let [counter, setCounter] = useState(5);

  // let counter = 5;

  const handleIncrease = () => {
    if(counter >= 20){
      setCounter(20);
    }else {
      counter = counter + 1;
      setCounter(counter)
    }
  }
  
  const handleDecrease = () => {
    if(counter <= 0) {
      setCounter(0);
    }else {
      counter = counter - 1;
      setCounter(counter)
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={handleIncrease}>Increase</button>
      <br />
      <br />
      <button onClick={handleDecrease}>Decrease</button>
    </>
  )
}

export default App
