import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
/* eslint-disable import/extensions */
import store from './Redux/configureStore';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  const linkElement = screen.getByText(/Space Travel Hub/i);
  expect(linkElement).toBeInTheDocument();
});
