import PropTypes from 'prop-types';

const RocketItem = ({
  id,
  flickrImages,
  rocketName,
  description,
}) => (
  <div key={id}>
    <img src={flickrImages} alt="rocket dispaly" />
    <p>{rocketName}</p>
    <p>{description}</p>
  </div>
);

RocketItem.propTypes = {
  id: PropTypes.number.isRequired,
  flickrImages: PropTypes.string.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default RocketItem;
