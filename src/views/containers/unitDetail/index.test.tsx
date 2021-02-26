import React from 'react';
import { render, screen } from '@testing-library/react';

import UnitDetail from './index';

import { Provider } from 'react-redux';
import store from '../../../store';

test('render detail page', () => {
  render(
    <Provider store={store}>
      <UnitDetail match={{ params: { unitId: '2' } }} />
    </Provider>
  );
  const title = screen.getByText(/Unit Details/i);
  expect(title).toBeInTheDocument();
});
