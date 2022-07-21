import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';
import Photo from '../assets/images/Photo.png';
import './nav.css';

const NavLink = () => (
  <div className="container d-flex align-items-center justify-content-between border-bottom p-2 my-2">
    <div className="container d-flex align-items-center">
      <img
        className=""
        src={Photo}
        style={{ width: '100px', height: '100px', marginRight: '10px' }}
        alt="Logo"
      />
      <h1 className="text-nowrap">Space Travel Hub</h1>
    </div>
    <div className="text-nowrap p-3">
      <Link to="rockets" className="p-2 navlink">
        Rockects
      </Link>
      <Link to="missions" className="p-2 navlink">
        Missions
      </Link>
      <Link to="profile" className="p-2 navlink">
        My Profile
      </Link>
    </div>
  </div>
);

export default NavLink;
