import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import missionSlice from './mission/mission.js';
import rocketsReducer from './Rocket/rokect-reducer.js';

const rootReducer = combineReducers({
  mission: missionSlice,
  rockets: rocketsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
export default store;
