import { useState } from 'react';
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
    const [input, setInput] = useState('');
    const [isUpdating, setIsUpdating] = useState(false);
    const [currentTodoId, setCurrentTodoId] = useState(null);

  return (
    <>
      <h1>Lear about Redux-Toolkit</h1>
      <AddTodo input={input} setInput={setInput} isUpdating={isUpdating} currentTodoId={currentTodoId} />
      <Todos setInput={setInput} setIsUpdating={setIsUpdating} setCurrentTodoId={setCurrentTodoId} />
    </>
  )
}

export default App
