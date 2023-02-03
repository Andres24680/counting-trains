import { render, screen } from '@testing-library/react';
import App from './App';

test('header renders with correct text', () => {
  render(<App />);
 const headerE1 = screen.getByRole("heading")
 expect(headerE1.textContent.toBe("Testing Playground"))
});
