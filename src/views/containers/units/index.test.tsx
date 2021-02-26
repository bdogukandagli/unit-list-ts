import React from 'react';
import {
  getByTestId,
  getByText,
  render,
  screen,
  queryByAttribute,
  fireEvent,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Ages } from '../../../utils/constants';
import '@testing-library/jest-dom/extend-expect';

import Units from './index';

import { Provider } from 'react-redux';
import store from '../../../store';

test('render ages section', () => {
  render(
    <Provider store={store}>
      <Units />
    </Provider>
  );
  const title = screen.getByText(/Ages/i);
  expect(title).toBeInTheDocument();
});

test('render costs section', () => {
  render(
    <Provider store={store}>
      <Units />
    </Provider>
  );
  const title = screen.getByText(/Costs/i);
  expect(title).toBeInTheDocument();
});

test('render units section', () => {
  render(
    <Provider store={store}>
      <Units />
    </Provider>
  );
  const table = screen.getByRole('table');
  expect(table).toBeInTheDocument();
});

test('render ages buttons', () => {
  render(
    <Provider store={store}>
      <Units />
    </Provider>
  );
  const buttons = screen.getAllByRole('button');
  expect(buttons.length == 5).toBe(true);
});

test('age buttons click', () => {
  const getById = queryByAttribute.bind(null, 'id');

  const dom = render(
    <Provider store={store}>
      <Units />
    </Provider>
  );
  const button = getById(dom.container, 'Feudal');

  userEvent.click(button);

  expect(button).toHaveStyle(`color: #FFFFFF`);
});

test('renders checkboxes', () => {
  render(
    <Provider store={store}>
      <Units />
    </Provider>
  );
  const checkboxes = screen.getAllByRole('checkbox');
  expect(checkboxes.length).toBe(3);
});

test('checkboxes click', () => {
  const getById = queryByAttribute.bind(null, 'id');

  const dom = render(
    <Provider store={store}>
      <Units />
    </Provider>
  );
  const checkbox = getById(dom.container, 'Gold');

  userEvent.click(checkbox);

  expect(checkbox.checked).toEqual(true);
});

test('checkboxes click', async () => {
  const getById = queryByAttribute.bind(null, 'id');

  const dom = render(
    <Provider store={store}>
      <Units />
    </Provider>
  );

  const checkbox = getById(dom.container, 'Gold');

  userEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);

  const sliderInput = getById(dom.container, 'GoldSlider');

  sliderInput.getBoundingClientRect = jest.fn(() => {
    return {
      bottom: 280,
      height: 28,
      left: 19,
      right: 58,
      top: 258,
      width: 210,
    } as DOMRect;
  });

  expect(sliderInput).toBeInTheDocument();

  await fireEvent.mouseDown(sliderInput, { clientX: 20, clientY: 310 });
});
