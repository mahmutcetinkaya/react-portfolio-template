import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders key portfolio sections', () => {
  render(<App />);

  expect(screen.getByRole('link', { name: /ana sayfaya git/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /hakkımda/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /yetenekler/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /projeler/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /deneyim \/ eğitim/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 2, name: 'İletişim' })).toBeInTheDocument();
});
