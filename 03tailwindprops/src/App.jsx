import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  // let myObj = {
  //   userName: 'Aditya',
  //   age: 21
  // }

  // let myArr = [1,2,3,4,5]

  return (
    <>
      
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      
      <Card name='Aditi' btnText='My Profile' />
      <Card name='Himanshi' />
    </>
  )
}

export default App
