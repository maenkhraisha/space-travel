import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

const RocketProfile = () => {
  const rocketArray = useSelector((state) => state.rockets);
  const rocketFiltered = rocketArray.filter((rocket) => rocket.reserve);
  return (
    <div className="reserve-container-top">
      <h3>My Rockets</h3>
      <table className="table table-bordered">
        {rocketFiltered.length === 0 && <p>No Reserved Missions</p>}
        {rocketFiltered.map((rocket) => (
          <tr key={rocket.id}>
            <th>
              <p>{rocket.name}</p>
            </th>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default RocketProfile;
