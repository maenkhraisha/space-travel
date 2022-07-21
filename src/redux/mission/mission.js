import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
  reserve: null,
};

const missionSlice = createSlice({
  initialState,
  name: 'mission',
  reducers: {
    fetchMissions: (state, action) => {
      /* eslint-disable no-param-reassign */
      const reservedMissionIds = state.missions
        ?.filter((mission) => mission.reserve)
        .map((mission) => mission.mission_id);
      const value = action.payload.map((valObj) => ({
        ...valObj,
        reserve: reservedMissionIds.includes(valObj.mission_id),
      }));
      state.missions = value;
    },
    joinMission: (state, action) => {
      /* eslint-disable no-param-reassign */
      const item = state.missions.filter(
        (m) => m.mission_id === action.payload,
      )[0];
      item.reserve = !item.reserve;
    },
    leaveMission: (state, action) => {
      /* eslint-disable no-param-reassign */
      const item = state.missions.filter(
        (m) => m.mission_id === action.payload,
      )[0];
      item.reserve = !item.reserve;
    },
  },
});

export const { fetchMissions, joinMission, leaveMission } = missionSlice.actions;

export default missionSlice.reducer;

export const fetchMission = async (url, dispatch) => {
  const res = await fetch(url);
  const data = await res.json();
  dispatch(fetchMissions(data));
};
