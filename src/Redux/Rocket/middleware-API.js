import fectchServer from './API-service';
import { getRockets } from './rokect-reducer';

const fetchRocketsMiddleware = async (dispatch) => {
  fectchServer().then((data) => dispatch(getRockets(data)));
};

export default fetchRocketsMiddleware;
