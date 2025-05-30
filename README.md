# React To-Do List Application

A complete, feature-rich To-Do List application built with React and Vite. This application includes task management, validation, filtering, sorting, and localStorage persistence.

## Features

### Core Functionality
-  **Add Tasks**: Create new tasks with input validation
-  **Remove Tasks**: Delete tasks with smooth animations
-  **Mark Complete**: Toggle task completion status
-  **Dynamic Display**: Real-time updates and statistics

### Advanced Features
-  **Filtering**: View all, active, or completed tasks
-  **Sorting**: Sort by date created, alphabetical order, or completion status
-  **localStorage Integration**: Automatic data persistence across browser sessions
-  **Input Validation**: Comprehensive task validation with user feedback
-  **Responsive Design**: Works seamlessly on desktop and mobile devices
-  **Modern UI**: Clean, intuitive interface with smooth animations

### Input Validation Rules
- Tasks cannot be empty
- Minimum 3 characters required
- Maximum 100 characters allowed
- Must contain at least one letter or number
- Real-time character count display
- Error messages for invalid input

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd to-do-application
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173/` to view the application

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks
- `npm run test` - Run tests in watch mode
- `npm run test:ui` - Run tests with UI interface
- `npm run test:run` - Run tests once and exit

## Project Structure

```
src/
├── components/
│   ├── TodoApp.jsx          # Main application component
│   ├── TodoForm.jsx         # Task input form with validation
│   ├── TodoList.jsx         # Task list container
│   ├── TodoItem.jsx         # Individual task component
│   ├── TodoFilters.jsx      # Filtering and sorting controls
│   └── __tests__/
│       └── TodoApp.test.jsx # Test suite
├── test/
│   └── setup.js             # Test configuration
├── App.jsx                  # Root component
├── App.css                  # All component styles consolidated
└── main.jsx                 # Application entry point
```

## CSS Architecture

All component styles have been consolidated into a single `App.css` file for easier maintenance and better organization. The CSS is structured with clear sections for each component:

- **Global Styles**: Base styles and resets
- **TodoApp Styles**: Main container and header styles
- **TodoForm Styles**: Input form and validation styles
- **TodoList Styles**: List container and animations
- **TodoItem Styles**: Individual task item styles
- **TodoFilters Styles**: Filter and sort control styles
- **Responsive Design**: Mobile-first responsive breakpoints

This approach provides:
-  Centralized styling for easier maintenance
-  Better performance (single CSS file)
-  Consistent design system
-  Easier debugging and modifications

## Component Architecture

### TodoApp (Main Container)
- Manages global state for todos, filters, and sorting
- Handles localStorage integration
- Provides statistics and overall layout
- Coordinates between child components

### TodoForm (Input Component)
- Handles task input with real-time validation
- Provides user feedback for validation errors
- Character count display
- Form submission handling

### TodoList & TodoItem (Display Components)
- Renders filtered and sorted todo items
- Handles task completion toggling
- Smooth animations for task removal
- Responsive design for mobile devices

### TodoFilters (Control Component)
- Filter options: All, Active, Completed
- Sort options: Date, Alphabetical, Status
- Both dropdown and button interfaces

## Testing

### Running Tests

```bash
# Run tests in watch mode (recommended for development)
npm run test

# Run tests once and exit
npm run test:run

# Run tests with UI interface
npm run test:ui
```

### Test Coverage

The application includes comprehensive tests covering:
-  Component rendering
-  Task addition and validation
-  Task completion toggling
-  Task removal
-  Filtering functionality
-  localStorage integration
-  User interactions

### Writing Additional Tests

Tests are located in `src/components/__tests__/` and use:
- **Vitest** - Fast unit test framework
- **React Testing Library** - Component testing utilities
- **Jest DOM** - Additional DOM matchers

Example test structure:
```javascript
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import TodoApp from '../TodoApp'

describe('TodoApp', () => {
  it('should add a new todo', () => {
    render(<TodoApp />)
    // Test implementation
  })
})
```

## Data Persistence

The application uses **localStorage** to automatically save and restore your todos:
-  Data persists across browser sessions
-  Automatic save on every change
-  Error handling for storage issues
-  No server required

### Storage Format
```javascript
{
  "todos": [
    {
      "id": 1640995200000.123,
      "text": "Complete the project",
      "completed": false,
      "createdAt": "2023-12-31T23:59:59.999Z"
    }
  ]
}
```

## Browser Compatibility

-  Chrome (latest)
-  Firefox (latest)
-  Safari (latest)
-  Edge (latest)
-  Mobile browsers

## Git Workflow & Deployment

### Initial Setup
```bash
# Initialize git repository
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial commit: Complete React Todo List application"

# Add remote repository
git remote add origin <your-repository-url>

# Push to remote
git push -u origin main
```

### Building for Production
```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

### Deployment Options
- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder after building
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Firebase Hosting**: Deploy with Firebase CLI

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/)
- Styled with modern CSS and responsive design principles
- Tested with [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/)
- Icons and design inspiration from modern UI patterns
