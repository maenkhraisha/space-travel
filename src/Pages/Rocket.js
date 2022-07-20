import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchRocketsMiddleware from '../Redux/Rocket/middleware-API';
import RocketItem from '../Components/rocketItem';

const Rocket = () => {
  const rocketArray = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchRocketsMiddleware(dispatch);
  }, []);

  return (
    <div>
      <h1>this is rocket page</h1>
      {rocketArray.rockets.map((rock) => (
        <RocketItem
          key={rock.id}
          id={rock.id}
          flickrImages={rock.flickr_images}
          rocketName={rock.rocket_name}
          description={rock.description}
        />
      ))}
    </div>
  );
};

export default Rocket;
