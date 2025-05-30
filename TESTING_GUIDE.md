# Testing Guide for React To-Do List Application

## Quick Start Testing

### 1. Manual Testing
The application is currently running at `http://localhost:5173/`. Test the following features:

#### Core Functionality
-  **Add Tasks**: Enter text in the input field and click "Add Task"
-  **Task Validation**: Try adding empty tasks, short tasks (<3 chars), or long tasks (>100 chars)
-  **Mark Complete**: Click the checkbox next to any task
-  **Remove Tasks**: Click the "×" button next to any task
-  **Real-time Stats**: Watch the Total/Active/Completed counters update

#### Advanced Features
-  **Filtering**: Use the filter buttons (All, Active, Completed) or dropdown
-  **Sorting**: Change sort options (Date, Alphabetical, Status)
-  **Persistence**: Refresh the page and verify tasks are saved
-  **Responsive Design**: Resize browser window or test on mobile

### 2. Automated Testing

#### Install Test Dependencies (if not already installed)
```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
```

#### Run Tests
```bash
# Run tests in watch mode (recommended for development)
npm run test

# Run tests once and exit
npm run test:run

# Run tests with UI interface (if @vitest/ui is installed)
npm run test:ui
```

#### Test Coverage
Current tests cover:
- Component rendering
- Task addition with validation
- Task completion toggling
- Task removal
- Filtering functionality
- localStorage integration

### 3. Performance Testing

#### Build and Preview
```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

#### Lighthouse Testing
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Run audit for Performance, Accessibility, Best Practices, SEO

### 4. Browser Compatibility Testing

Test the application in:
-  Chrome (latest)
-  Firefox (latest)
-  Safari (latest)
-  Edge (latest)
-  Mobile browsers (iOS Safari, Chrome Mobile)

### 5. Accessibility Testing

#### Manual Checks
-  Keyboard navigation (Tab, Enter, Space)
-  Screen reader compatibility
-  Color contrast ratios
-  Focus indicators
-  ARIA labels and roles

#### Automated Accessibility Testing
```bash
# Install axe-core for accessibility testing
npm install --save-dev @axe-core/react

# Add to your test setup for automated a11y testing
```

### 6. Edge Cases to Test

#### Input Validation
- Empty input
- Whitespace-only input
- Very long text (>100 characters)
- Special characters and emojis
- HTML/script injection attempts

#### State Management
- Adding many tasks (100+)
- Rapid clicking of buttons
- Browser refresh during operations
- localStorage quota exceeded

#### Error Scenarios
- Network disconnection
- localStorage disabled
- JavaScript disabled
- Very slow device performance

### 7. Writing Additional Tests

#### Example Test Structure
```javascript
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import TodoApp from '../TodoApp'

describe('TodoApp Feature', () => {
  it('should handle specific scenario', () => {
    render(<TodoApp />)
    
    // Test implementation
    const input = screen.getByPlaceholderText('Enter a new task...')
    fireEvent.change(input, { target: { value: 'Test task' } })
    fireEvent.click(screen.getByText('Add Task'))
    
    expect(screen.getByText('Test task')).toBeInTheDocument()
  })
})
```

#### Test File Locations
- Component tests: `src/components/__tests__/`
- Integration tests: `src/__tests__/`
- E2E tests: `tests/` (if using Playwright/Cypress)

### 8. Continuous Integration

#### GitHub Actions Example
```yaml
name: Test
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run test:run
      - run: npm run build
```

### 9. Common Issues and Solutions

#### Test Failures
- **localStorage errors**: Check test setup file includes localStorage mock
- **Component not found**: Verify component imports and exports
- **Async operations**: Use `waitFor` for async state updates

#### Performance Issues
- **Slow rendering**: Check for unnecessary re-renders
- **Memory leaks**: Verify cleanup in useEffect hooks
- **Large bundle size**: Analyze with `npm run build` and bundle analyzer

### 10. Testing Checklist

Before deployment, ensure:
- [ ] All automated tests pass
- [ ] Manual testing completed for all features
- [ ] Cross-browser testing completed
- [ ] Mobile responsiveness verified
- [ ] Accessibility requirements met
- [ ] Performance benchmarks achieved
- [ ] Error handling tested
- [ ] Edge cases covered
- [ ] Production build works correctly
- [ ] Documentation updated

## Next Steps

1. **Expand Test Coverage**: Add more unit tests for edge cases
2. **Integration Testing**: Test component interactions
3. **E2E Testing**: Add Playwright or Cypress for full user flows
4. **Performance Monitoring**: Set up performance budgets
5. **Accessibility Audits**: Regular a11y testing in CI/CD
