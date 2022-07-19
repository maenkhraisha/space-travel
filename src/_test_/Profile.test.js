import React from 'react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Profile from '../Pages/Profile';
import store from '../redux/configureStore';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Profile />
      </Provider>,
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
