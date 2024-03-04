import './App.css'
import { useState } from 'react';

function App() {

  // useState is a method which returns an array which has a variable and a function
  // Here, counter is a variable and setcounter is a function which is return in an array by useState()
  const [counter, setCounter] = useState(5);

  // let counter = 5;

  const handleIncrease = () => {
    if(counter >= 20){
      setCounter(20);
    }else {
      /**
       * In this senario React's fiber algorithum will create a batch for all the 5 function. And these function will update the same same counter value.
       */
      setCounter(counter + 1)
      setCounter(counter + 1)
      setCounter(counter + 1)
      setCounter(counter + 1)
      // To update count valu in each setCount() we can use callback function to update counter variable
      setCounter((prevCounter) => prevCounter+1)
      setCounter((prevCounter) => prevCounter+1)
      setCounter((prevCounter) => prevCounter+1)
    }
  }
  
  const handleDecrease = () => {
    if(counter <= 0) {
      setCounter(0);
    }else {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={handleIncrease}>Increase {counter}</button>
      <br />
      <br />
      <button onClick={handleDecrease}>Decrease {counter}</button>
    </>
  )
}

export default App
