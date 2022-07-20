const FETCH_ROCKETS = 'rockets/FETCH_ROCKETS';

export function getRockets(rockets) {
  return { type: FETCH_ROCKETS, payload: rockets };
}

const initialState = {
  rockets: [],
  reserve: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return { rockets: action.payload, reserve: false };
      // return [...state, { rockets: [action.payload[0]], reverse: false }];
    default:
      return state;
  }
};

export default reducer;
