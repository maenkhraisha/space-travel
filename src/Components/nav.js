import { Link } from 'react-router-dom';
import '../App.css';

const NavLink = () => (
  <nav>
    <Link to="rockets" className="link">Rockects</Link>
    <Link to="missions" className="link">Missions</Link>
    <Link to="profile" className="link">My Profile</Link>
  </nav>
);

export default NavLink;
