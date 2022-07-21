import React from 'react';
import { useSelector } from 'react-redux';

const MissionProfile = () => {
  const { missions: missionArray } = useSelector((state) => state.mission);
  const missionsFiltered = missionArray.filter((mission) => mission.reserve);
  return (
    <div className="reserve-container-top">
      <h3>My Missions</h3>
      <table className="table table-bordered">
        { missionsFiltered.length === 0 && <p>No Reserved Missions</p>}
        {missionsFiltered.map((mission) => (
          <tr key={mission.mission_id}>
            <th>
              <p>{mission.mission_name}</p>
            </th>
          </tr>
        ))}
      </table>
    </div>
  );
};
export default MissionProfile;
