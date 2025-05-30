import TodoItem from './TodoItem'

const TodoList = ({ todos, onToggleTodo, onRemoveTodo }) => {
  if (todos.length === 0) {
    return (
      <div className="todo-list empty">
        <p className="no-todos">No tasks match your current filter.</p>
      </div>
    )
  }

  return (
    <div className="todo-list">
      <ul className="todo-items">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggleTodo}
            onRemove={onRemoveTodo}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
