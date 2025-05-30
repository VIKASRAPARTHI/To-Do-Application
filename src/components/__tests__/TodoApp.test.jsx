import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import TodoApp from '../TodoApp'

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
}
global.localStorage = localStorageMock

describe('TodoApp', () => {
  beforeEach(() => {
    localStorageMock.getItem.mockClear()
    localStorageMock.setItem.mockClear()
  })

  it('renders the todo app with header', () => {
    render(<TodoApp />)
    expect(screen.getByText('Todo List')).toBeInTheDocument()
    expect(screen.getByText('Total: 0')).toBeInTheDocument()
    expect(screen.getByText('Active: 0')).toBeInTheDocument()
    expect(screen.getByText('Completed: 0')).toBeInTheDocument()
  })

  it('adds a new todo when form is submitted', () => {
    render(<TodoApp />)
    
    const input = screen.getByPlaceholderText('Enter a new task...')
    const addButton = screen.getByText('Add Task')
    
    fireEvent.change(input, { target: { value: 'Test todo' } })
    fireEvent.click(addButton)
    
    expect(screen.getByText('Test todo')).toBeInTheDocument()
    expect(screen.getByText('Total: 1')).toBeInTheDocument()
    expect(screen.getByText('Active: 1')).toBeInTheDocument()
  })

  it('toggles todo completion', () => {
    render(<TodoApp />)
    
    // Add a todo first
    const input = screen.getByPlaceholderText('Enter a new task...')
    fireEvent.change(input, { target: { value: 'Test todo' } })
    fireEvent.click(screen.getByText('Add Task'))
    
    // Toggle completion
    const checkbox = screen.getByRole('checkbox')
    fireEvent.click(checkbox)
    
    expect(screen.getByText('Active: 0')).toBeInTheDocument()
    expect(screen.getByText('Completed: 1')).toBeInTheDocument()
  })

  it('removes a todo', () => {
    render(<TodoApp />)
    
    // Add a todo first
    const input = screen.getByPlaceholderText('Enter a new task...')
    fireEvent.change(input, { target: { value: 'Test todo' } })
    fireEvent.click(screen.getByText('Add Task'))
    
    // Remove the todo
    const removeButton = screen.getByTitle('Remove task')
    fireEvent.click(removeButton)
    
    // Wait for animation and removal
    setTimeout(() => {
      expect(screen.queryByText('Test todo')).not.toBeInTheDocument()
      expect(screen.getByText('Total: 0')).toBeInTheDocument()
    }, 300)
  })

  it('filters todos correctly', () => {
    render(<TodoApp />)
    
    // Add multiple todos
    const input = screen.getByPlaceholderText('Enter a new task...')
    
    fireEvent.change(input, { target: { value: 'Active todo' } })
    fireEvent.click(screen.getByText('Add Task'))
    
    fireEvent.change(input, { target: { value: 'Completed todo' } })
    fireEvent.click(screen.getByText('Add Task'))
    
    // Complete one todo
    const checkboxes = screen.getAllByRole('checkbox')
    fireEvent.click(checkboxes[1])
    
    // Filter to show only active
    fireEvent.click(screen.getByText('Active'))
    expect(screen.getByText('Active todo')).toBeInTheDocument()
    expect(screen.queryByText('Completed todo')).not.toBeInTheDocument()
    
    // Filter to show only completed
    fireEvent.click(screen.getByText('Completed'))
    expect(screen.queryByText('Active todo')).not.toBeInTheDocument()
    expect(screen.getByText('Completed todo')).toBeInTheDocument()
  })
})
