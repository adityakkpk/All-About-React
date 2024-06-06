import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Question 1
  // const [val, setVal] = useState(1)
  // // const [mulVal, setMulVal] = useState(1)
  // let mulVal = val * 5;
  // const multipltbyFive = () => {
  //   // setMulVal(val * 5)
  //   setVal(val+1)
  // }
  // return (
  //   <>
  //     <h1>Main Value: {val} </h1>
  //     <button
  //       onClick={multipltbyFive}
  //     >Click to Multiply by 5</button>
  //     <h2>Multiplied Value: {mulVal}</h2>
  //   </>
  // )
  // Question 2
  console.log('App rendered ', Math.random());
  const [value, setValue] = useState({
    value: 0,
  });

  const clickMe = () => {
    setValue({
      value: 0,
    });
  }

  return (
    <>
      <h1>Main value: {value.value}</h1>
      <button onClick={clickMe}>Multiply by 5</button>
    </>
  )
}

export default App
