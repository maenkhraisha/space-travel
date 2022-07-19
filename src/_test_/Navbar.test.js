import React from 'react';
import renderer from 'react-test-renderer';
import NavLink from '../Components/Navbar';
import { MemoryRouter as Router } from 'react-router-dom';

it('renders correctly', () => {
  const tree = renderer
    .create(
     <Router>
       <NavLink />
     </Router>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
