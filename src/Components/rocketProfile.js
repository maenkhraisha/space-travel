import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

const RocketProfile = () => {
  const rocketArray = useSelector((state) => state.rockets);
  const rocketFiltered = rocketArray.filter((rocket) => rocket.reserve);
  return (
    <div className="reserve-container-top">
      <h3>My Rockets</h3>
      {rocketFiltered.length === 0 && <p>No Reserved Missions</p>}
      <table className="table table-bordered">
        <thead>
          {rocketFiltered.map((rocket) => (
            <tr key={rocket.id}>
              <th className="p-2">{rocket.name}</th>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
};

export default RocketProfile;
