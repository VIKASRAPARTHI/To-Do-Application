const TodoFilters = ({ filter, sortBy, onFilterChange, onSortChange }) => {
  const filterOptions = [
    { value: 'all', label: 'All Tasks' },
    { value: 'active', label: 'Active' },
    { value: 'completed', label: 'Completed' }
  ]

  const sortOptions = [
    { value: 'date', label: 'Date Created' },
    { value: 'alphabetical', label: 'Alphabetical' },
    { value: 'status', label: 'Status' }
  ]

  return (
    <div className="todo-filters">
      <div className="filter-group">
        <label htmlFor="filter-select">Filter:</label>
        <select
          id="filter-select"
          value={filter}
          onChange={(e) => onFilterChange(e.target.value)}
          className="filter-select"
        >
          {filterOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="sort-select">Sort by:</label>
        <select
          id="sort-select"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="sort-select"
        >
          {sortOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-buttons">
        {filterOptions.map(option => (
          <button
            key={option.value}
            onClick={() => onFilterChange(option.value)}
            className={`filter-button ${filter === option.value ? 'active' : ''}`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TodoFilters
