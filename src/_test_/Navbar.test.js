import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import NavLink from '../Components/Navbar';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <NavLink />
      </Router>,
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
