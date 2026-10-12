import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio hero', () => {
  render(<App />);
  expect(screen.getByText('Merhaba, ben')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /çalışmalarımı keşfet/i })).toBeInTheDocument();
});
