const FETCH_ROCKETS = 'rockets/FETCH_ROCKETS';
const RESERVE_ROCKET = 'rockets/RESERVE_ROCKETS';
const CANCEL_ROCKET = 'rockets/CANCEL_ROCKETS';

const URL = 'https://api.spacexdata.com/v3/rockets';
const initialState = [];

export function getRockets(payload) {
  return { type: FETCH_ROCKETS, payload };
}

export function reserveRocket(payload) {
  return { type: RESERVE_ROCKET, payload };
}

export function cancelRocket(payload) {
  return { type: CANCEL_ROCKET, payload };
}

export const fetchRockets = () => async (dispatch) => {
  const rockets = await fetch(URL);
  const data = await rockets.json();
  const mapRockets = data.map((rock) => ({
    id: rock.id,
    name: rock.rocket_name,
    type: rock.rocket_type,
    image: rock.flickr_images[0],
    description: rock.description,
    reserve: false,
  }));
  dispatch(getRockets(mapRockets));
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS: {
      return action.payload;
    }
    case RESERVE_ROCKET: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserve: true };
      });
      return newState;
    }
    case CANCEL_ROCKET: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserve: false };
      });
      return newState;
    }
    default:
      return state;
  }
};

export default rocketsReducer;
