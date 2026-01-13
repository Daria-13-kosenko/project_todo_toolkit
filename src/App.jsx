import './App.css'
import { useState } from 'react'
import { Container } from '@mui/material'
import TodoForm from './components/todoForm/TodoForm'
import TodoList from './components/todoList/TodoList'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Todo 1', done: false },
    { id: 2, title: 'Todo 2', done: false },
    { id: 3, title: 'Todo 3', done: true },
  ])
  const addTodo = (text) => {
    const value = text.trim()
    if (!value) return
    setTodos((prev) => [{ id: Date.now(), title: value, done: false }, ...prev])
  }

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    )
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </Container>
  )
}
export default App
