import { Link } from 'react-router-dom';
import '../App.css';
import './nav.css';
import Photo from '../assets/images/Photo.png';

const NavLink = () => (
  <nav className="navbar">
    <div className="nav-img">
      <img src={Photo} style={{ width: '100px', height: '100px' }} alt="Logo" />
      <h1>Space Travel Hub</h1>
    </div>
    <div className="nav-links">
      <Link to="rockets" className="link">Rockects</Link>
      <Link to="missions" className="link">Missions</Link>
      <Link to="profile" className="link">My Profile</Link>
    </div>
  </nav>
);

export default NavLink;
