import { render, screen } from '@testing-library/react';
import App from './App';

test('renders contact link', () => {
  render(<App />);
  const linkElement = screen.getByText(/contact/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders company Name', () => {
  render(<App />);
  const linkElement = screen.getByText(/MontanariTech/i);
  expect(linkElement).toBeInTheDocument();
});