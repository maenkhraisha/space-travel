import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { reserveRocket, cancelRocket } from '../Redux/Rocket/rokect-reducer';

const RocketItem = ({
  id,
  flickrImages,
  rocketName,
  description,
  reserve,
}) => {
  const dispatch = useDispatch();
  return (
    <Container className="d-flex my-3" key={id}>
      <img style={{ width: '20%' }} src={flickrImages} alt="rocket dispaly" />
      <Container>
        <p className="h4">{rocketName}</p>
        {reserve && (
          <p className="alert alert-success m-2 p-1" style={{ color: 'white', backgroundColor: 'green', display: 'inline' }}>
            Reserved
          </p>
        )}
        <p style={{ display: 'inline' }}>{description}</p>
        {reserve ? (
          <Button
            type="button"
            className="btn btn-outline-secondary"
            style={{ display: 'block' }}
            value={id}
            onClick={() => dispatch(cancelRocket(id))}
          >
            Cancel Reservation
          </Button>
        ) : (
          <Button
            type="button"
            className="btn btn-primary"
            style={{ display: 'block' }}
            value={id}
            onClick={() => dispatch(reserveRocket(id))}
          >
            Reserve Rocket
          </Button>
        )}
      </Container>
    </Container>
  );
};

RocketItem.propTypes = {
  id: PropTypes.number.isRequired,
  flickrImages: PropTypes.string.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserve: PropTypes.bool.isRequired,
};

export default RocketItem;
