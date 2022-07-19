import React from 'react';
import { useSelector } from 'react-redux';

const MissionProfile = () => {
  const { missions: missionArray } = useSelector((state) => state.mission);
  const missionsFiltered = missionArray.filter((mission) => mission.reserve);
  return (
    <div className="reserve-container-top">
      <h1>My Missions</h1>
      <div className="container">
        { missionsFiltered.length === 0 && <p>No Reserved Missions</p>}
        {missionsFiltered.map((mission) => (
          <h3 key={mission.mission_id} className="reserve-item">{mission.mission_name}</h3>
        ))}
      </div>
    </div>
  );
};
export default MissionProfile;
