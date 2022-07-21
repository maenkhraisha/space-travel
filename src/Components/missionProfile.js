import React from 'react';
import { useSelector } from 'react-redux';

const MissionProfile = () => {
  const { missions: missionArray } = useSelector((state) => state.mission);
  const missionsFiltered = missionArray.filter((mission) => mission.reserve);
  return (
    <div className="reserve-container-top">
      <h3>My Missions</h3>
      {missionsFiltered.length === 0 && <p>No Reserved Missions</p>}
      <table className="table table-bordered">
        <thead>
          {missionsFiltered.map((mission) => (
            <tr key={mission.mission_id}>
              <th>{mission.mission_name}</th>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
};
export default MissionProfile;
