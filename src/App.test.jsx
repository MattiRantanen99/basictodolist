// App.test.jsx

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { expect } from 'vitest';

test('render App component', () => {
  render(<App />);
  const header = screen.getByText('Todo App');
  expect(header).toBeInTheDocument();
});

test('add todo', () => {
  render(<App />);
  
  const description = screen.getByPlaceholderText('Description');
  fireEvent.change(description, {target: {value: 'Go to coffee'}});

  const date = screen.getByPlaceholderText('Date');
  fireEvent.change(date, {target: {value: '29.12.2023'}});

  const status = screen.getByPlaceholderText('Status');
  fireEvent.change(status, {target: {value: 'Open'}});

  const addbutton = screen.getByText('Add');
  fireEvent.click(addbutton);

  const table = screen.getByRole('table');
  expect(table).toHaveTextContent('Go to coffee');

  const clearButton = screen.getByText('Clear');
  fireEvent.click(clearButton);
  expect(table).not.toHaveTextContent('Go to coffee');
});
