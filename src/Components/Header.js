import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Photo from '../assets/images/Photo.png';
import './nav.css';

const Header = () => {
  const activeStyle = {
    textDecoration: 'underline',
  };
  return (
    <nav className="container d-flex align-items-center justify-content-between border-bottom p-2 my-2">
      <div className="container d-flex align-items-center">
        <img
          className=""
          src={Photo}
          style={{ width: '100px', height: '100px', marginRight: '10px' }}
          alt="Logo"
        />
        <h1 className="text-nowrap">Space Travel Hub</h1>
      </div>
      <ul className="container d-flex align-items-center">
        <li className="p-2 navlink">
          <NavLink
            to="rockets"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Rocket
          </NavLink>
        </li>
        <li className="p-2 navlink">
          <NavLink
            to="missions"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Mission
          </NavLink>
        </li>
        <li className="p-2 navlink">
          <NavLink
            to="profile"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Header;

// justify-content-between border-bottom p-2 my-2">
//   <div className="text-nowrap p-3">
//     <Link to="rockets" className="p-2 navlink">
//       Rockects
//     </Link>
//     <Link to="missions" className="p-2 navlink">
//       Missions
//     </Link>
//     <Link to="profile" className="p-2 navlink">
//       My Profile
//     </Link>
//   </div>
// </div>;
