const FETCH_MISSIONS = './mission/FETCH_MISSIONS';
const FETCH_MISSIONS_SUCCESS = 'mission/FETCH_MISSIONS_SUCCESS';
const MISSIONS_JOINED = 'mission/missionSlice/MISSIONS_JOINED';
const MISSIONS_LEFT = 'mission/MISSIONS_LEFT'
const initialState = {
  missions: [],
  status: 'fetching',
  loading: false,

};

const url = 'https://api.spacexdata.com/v3/missions';
const missionReducer = (state =initialState, action) => {
  switch(action.type) {
    case FETCH_MISSIONS: {
      return state;
    }
    case FETCH_MISSIONS_SUCCESS:
      populateMissions(action.myMissions);
      return { ...state, loading: false, missions: populateMissions(action.data) };

      case MISSIONS_JOINED:
      return { ...state, missions: JoinedMissions(state.missions, action.payload) };

    case MISSIONS_LEFT:
      return { ...state, missions: missionsLeft(state.missions, action.payload) };

      default :
      return state
  }

};

export default missionReducer;

export const JoinedMissions = (state, id) => {
  const newState = state.map((mission) => {
    if (mission.id !== id) {
      return mission;
    }
    return { ...mission, reserved: true };
  });
  return newState;
};

export const missionsLeft = (state, id) => {
  const newState = state.map((mission) => {
    if (mission.id !== id) {
      return mission;
    }
    return { ...mission, reserved: false };
  });
  return newState;
};

export const getMissions = () => async (dispatch) => {
  dispatch({type: FETCH_MISSIONS})
  const response = await fetch(url);
  const data = await response.json();

 return dispatch({
    type: FETCH_MISSIONS_SUCCESS,
    data,
  });
};

export const joinMission = (payload) => (
  {
    type: MISSIONS_JOINED,
    payload,
  }
)
export const leaveMission = (payload) => (
  {
    type: MISSIONS_LEFT,
    payload,
  }
)

 const populateMissions = (data) => {
  const missionArray = [];
  for (let i = 0; i < myMissions.length; i += 1) {
    missionArray.push({
      id: data[i].mission_id,
      name:data[i].mission_name,
      description: data[i].description,
      reserved: false,
    });
  }
  return missionArray;
 }