import React from 'react';
import { render, screen } from '@testing-library/react';

import Home from './index';

test('render title', () => {
  render(<Home />);
  const title = screen.getByText(/Home Page/i);
  expect(title).toBeInTheDocument();
});
