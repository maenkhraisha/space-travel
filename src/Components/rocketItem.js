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
    <div key={id}>
      <img style={{ width: '20%' }} src={flickrImages} alt="rocket dispaly" />
      <p>{rocketName}</p>
      {reserve && <p style={{ backgroundColor: 'green', display: 'inline' }}>Reserved</p>}
      <p style={{ display: 'inline' }}>
        {description}
      </p>
      {reserve ? (
        <button
          value={id}
          style={{ backgroundColor: 'white' }}
          onClick={() => dispatch(cancelRocket(id))}
          type="button"
        >
          Cancel Reservation
        </button>
      ) : (
        <button
          value={id}
          style={{ backgroundColor: 'lightblue' }}
          onClick={() => dispatch(reserveRocket(id))}
          type="button"
        >
          Reserve Rocket
        </button>
      )}
    </div>
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
