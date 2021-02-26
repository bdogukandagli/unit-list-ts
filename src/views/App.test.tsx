import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';
import Header from '../components/header/index';

test('render app', () => {
  render(<App />);
});

test('render header', () => {
  render(<Header />);
});

test('render home link', () => {
  render(<Header />);
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
});

test('render units link', () => {
  render(<Header />);
  expect(screen.getByText(/Units/i)).toBeInTheDocument();
});
