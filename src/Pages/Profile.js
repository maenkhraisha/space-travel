import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import MissionProfile from '../Components/missionProfile';
import RocketProfile from '../Components/rocketProfile';

const Profile = () => (
  <Container className="d-flex justify-content-around m-4">
    <MissionProfile />
    <RocketProfile />
  </Container>
);

export default Profile;
