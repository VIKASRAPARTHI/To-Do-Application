import { useState } from 'react'

const TodoItem = ({ todo, onToggle, onRemove }) => {
  const [isRemoving, setIsRemoving] = useState(false)

  const handleToggle = () => {
    onToggle(todo.id)
  }

  const handleRemove = () => {
    setIsRemoving(true)
    // Add a small delay for animation
    setTimeout(() => {
      onRemove(todo.id)
    }, 200)
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''} ${isRemoving ? 'removing' : ''}`}>
      <div className="todo-content">
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleToggle}
            className="todo-checkbox"
          />
          <span className="checkmark"></span>
        </label>

        <div className="todo-text-container">
          <span className="todo-text">{todo.text}</span>
          <span className="todo-date">Created: {formatDate(todo.createdAt)}</span>
        </div>
      </div>

      <button
        onClick={handleRemove}
        className="remove-button"
        title="Remove task"
        aria-label={`Remove task: ${todo.text}`}
      >
        ×
      </button>
    </li>
  )
}

export default TodoItem
