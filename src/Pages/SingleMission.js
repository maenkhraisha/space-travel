import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const url = 'https://api.spacexdata.com/v3/missions';
const SingleMission = () => {
  const [single, setSingle] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getMiss = async () => {
      setLoading(true);
      const res = await fetch(`${url}/${id}`);
      const data = await res.json();
      setSingle(data);
      setLoading(false);
    };
    getMiss();
  }, []);
  return (
    <div>
      <h1>Single Mission</h1>
      {loading
        ? <p>Loading...</p>
        : (
          <ul>
            <li>{single.mission_id}</li>
            <li>{single.mission_name}</li>
            <li>{single.description}</li>
          </ul>
        )}
    </div>
  );
};

export default SingleMission;
