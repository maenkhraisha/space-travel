import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { joinMission } from '../Redux/mission/mission';

const MissionList = ({ mission }) => {
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(joinMission(id));
  };

  return (
    <tr>
      <td className="name">{mission.mission_name}</td>
      <td className="description">
        <Link className="link" to={`/singleMission/${mission.mission_id}`}>
          {' '}
          {`${mission.description.slice(0, 300)}...`}
        </Link>
      </td>
      <td className="tableActive">
        <p style={{ background: mission.reserve ? 'blue' : 'gray', color: mission.reserve ? 'white' : 'white' }} className="active">{mission.reserve ? 'Active Member' : 'NOT A MEMBER'}</p>
      </td>
      <td className="tableBtn">
        <button style={{ border: mission.reserve && 'red 1px solid', color: mission.reserve && 'red' }} className="Btn" onClick={() => handleClick(mission.mission_id)} type="button">
          {mission.reserve ? 'Leave mission' : 'Join Mission'}
        </button>
      </td>
    </tr>
  );
};

MissionList.propTypes = {
  mission: PropTypes.shape({
    mission_name: PropTypes.string.isRequired,
    mission_id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserve: PropTypes.bool.isRequired,

  }).isRequired,
};

export default MissionList;
