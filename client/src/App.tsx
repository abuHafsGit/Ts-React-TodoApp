
import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

const todoData = [
  {
    id: '1',
    title: 'Nathing to do 1',
    description: " Todos Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat dolorum ab voluptate dolorem tempora odio aliquid eius commodi magnam dolore?"
  },
  {
    id: '2',
    title: 'Nathing to do 1',
    description: " Todos Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat dolorum ab voluptate dolorem tempora odio aliquid eius commodi magnam dolore?"
  },
  {
    id: '3',
    title: 'Nathing to do 1',
    description: " Todos Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat dolorum ab voluptate dolorem tempora odio aliquid eius commodi magnam dolore?"
  },
]

function App() {
  const [todos, setTodos] = useState(todoData)

  const handleDeleteTodo = (id: string) => {
    const filterTodo = todos.filter(todo => todo.id !== id)
    console.log(id)
    setTodos(filterTodo)
  }
  return (
    <div>
      <AddTodo />
      <Todos todos={todos} handleDeleteTodo={handleDeleteTodo} />
    </div>
  )
}

export default App
