import { useState } from 'react'

const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState('')

  const validateInput = (value) => {
    const trimmedValue = value.trim()

    if (!trimmedValue) {
      return 'Task cannot be empty'
    }

    if (trimmedValue.length < 3) {
      return 'Task must be at least 3 characters long'
    }

    if (trimmedValue.length > 100) {
      return 'Task cannot exceed 100 characters'
    }

    // Check for only whitespace or special characters
    if (!/[a-zA-Z0-9]/.test(trimmedValue)) {
      return 'Task must contain at least one letter or number'
    }

    return null
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const validationError = validateInput(inputValue)
    if (validationError) {
      setError(validationError)
      return
    }

    onAddTodo(inputValue)
    setInputValue('')
    setError('')
  }

  const handleInputChange = (e) => {
    const value = e.target.value
    setInputValue(value)

    // Clear error when user starts typing
    if (error) {
      setError('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Enter a new task..."
            className={`todo-input ${error ? 'error' : ''}`}
            maxLength={100}
          />
          <button
            type="submit"
            className="add-button"
            disabled={!inputValue.trim()}
          >
            Add Task
          </button>
        </div>
        {error && <div className="error-message">{error}</div>}
        <div className="input-info">
          <span className="char-count">
            {inputValue.length}/100 characters
          </span>
        </div>
      </form>
    </div>
  )
}

export default TodoForm
