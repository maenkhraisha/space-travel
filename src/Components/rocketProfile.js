import { useSelector } from 'react-redux';

const RocketProfile = () => {
  const rocketArray = useSelector((state) => state.rockets);
  const rocketFiltered = rocketArray.filter((rocket) => rocket.reserve);
  return (
    <div className="reserve-container-top">
      <h1>My Rockets</h1>
      <div className="container">
        { rocketFiltered.length === 0 && <p>No Reserved Missions</p>}
        {rocketFiltered.map((rocket) => (
          <h3 key={rocket.id} className="reserve-item">{rocket.name}</h3>
        ))}
      </div>
    </div>
  );
};

export default RocketProfile;
