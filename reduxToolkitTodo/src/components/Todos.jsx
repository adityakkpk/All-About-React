import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

function Todos({ setInput, setIsUpdating,  setCurrentTodoId}) {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();

    const updateTodoHandler = (id) => {
        setIsUpdating(true);
        const todoToUpdate = todos.find(todo => todo.id === id);
        setInput(todoToUpdate.text);
        setCurrentTodoId(id);
    }

  return (
    <>
        <div>Todos</div>
        <ul className='list-none'>
            {todos.map( todo => (
                <li key={todo.id} className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded'>
                    <div className="text-white">{todo.text}</div>                  
                    <div className="flex space-x-2">
                        <button 
                            onClick={() => updateTodoHandler(todo.id)}
                            className='text-green-500 hover:text-green-700'
                        >
                            Edit
                        </button>
                        <button 
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className='text-red-500 hover:text-red-700'
                        >
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    </>
  )
}

export default Todos
