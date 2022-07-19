import React from 'react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Mission from '../Pages/Mission'
import store from '../redux/configureStore';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Mission />
      </Provider>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});