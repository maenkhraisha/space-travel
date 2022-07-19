import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMission } from '../redux/mission/mission';
import './mission.css';
import MissionList from '../Components/missionList';

const url = 'https://api.spacexdata.com/v3/missions';
const Mission = () => {
  const dispatch = useDispatch();
  const { missions: missionArray } = useSelector((state) => state.mission);

  useEffect(() => {
    fetchMission(url, dispatch);
  }, []);

  return (
    <div>
      <table className="body">
        <thead className="tablehead">
          <tr>
            <th className="tableRow">Misson</th>
            <th className="tableRow">Description</th>
            <th className="tableRow">Status</th>
            <th className="tableRow">{}</th>
          </tr>
        </thead>
        <tbody>
          {missionArray.map((mission) => (
            <MissionList key={mission.mission_id} mission={mission} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mission;
