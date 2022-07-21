import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../Redux/Rocket/rokect-reducer';
import RocketItem from '../Components/rocketItem';

const Rocket = () => {
  const rockets = useSelector((state) => state.rockets);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!rockets.length) dispatch(fetchRockets());
  }, []);

  return (
    <Container>
      {rockets.map((rock) => (
        <RocketItem
          key={rock.id}
          id={rock.id}
          flickrImages={rock.image}
          rocketName={rock.name}
          description={rock.description}
          reserve={rock.reserve}
        />
      ))}
    </Container>
  );
};

export default Rocket;
