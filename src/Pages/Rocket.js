import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchRocketsMiddleware from '../Redux/Rocket/middleware-API';

const Rocket = () => {
  const rocketArray = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchRocketsMiddleware(dispatch);
  }, []);

  return (
    <div>
      <h1>this is rocket page</h1>
      {rocketArray.rockets.map((r) => (
        <h3 key={r.rocket_id}>{r.rocket_name}</h3>
      ))}
    </div>
  );
};

export default Rocket;
