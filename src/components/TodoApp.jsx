import { useState, useEffect } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoFilters from './TodoFilters'

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all') // all, active, completed
  const [sortBy, setSortBy] = useState('date') // date, alphabetical, status

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos))
      } catch (error) {
        console.error('Error loading todos from localStorage:', error)
      }
    }
  }, [])

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // Add new todo
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now() + Math.random(), // Simple unique ID
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    }
    setTodos(prevTodos => [...prevTodos, newTodo])
  }

  // Remove todo
  const removeTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  // Toggle todo completion
  const toggleTodo = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  // Filter todos based on current filter
  const getFilteredTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed)
      case 'completed':
        return todos.filter(todo => todo.completed)
      default:
        return todos
    }
  }

  // Sort todos based on current sort option
  const getSortedTodos = (todosToSort) => {
    const sorted = [...todosToSort]
    switch (sortBy) {
      case 'alphabetical':
        return sorted.sort((a, b) => a.text.toLowerCase().localeCompare(b.text.toLowerCase()))
      case 'status':
        return sorted.sort((a, b) => {
          if (a.completed === b.completed) return 0
          return a.completed ? 1 : -1 // Active tasks first
        })
      case 'date':
      default:
        return sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Newest first
    }
  }

  const filteredAndSortedTodos = getSortedTodos(getFilteredTodos())

  // Get statistics
  const totalTodos = todos.length
  const completedTodos = todos.filter(todo => todo.completed).length
  const activeTodos = totalTodos - completedTodos

  return (
    <div className="todo-app">
      <header className="todo-header">
        <h1>Todo List</h1>
        <div className="todo-stats">
          <span>Total: {totalTodos}</span>
          <span>Active: {activeTodos}</span>
          <span>Completed: {completedTodos}</span>
        </div>
      </header>

      <TodoForm onAddTodo={addTodo} />

      <TodoFilters
        filter={filter}
        sortBy={sortBy}
        onFilterChange={setFilter}
        onSortChange={setSortBy}
      />

      <TodoList
        todos={filteredAndSortedTodos}
        onToggleTodo={toggleTodo}
        onRemoveTodo={removeTodo}
      />

      {todos.length === 0 && (
        <div className="empty-state">
          <p>No todos yet. Add one above to get started!</p>
        </div>
      )}
    </div>
  )
}

export default TodoApp
