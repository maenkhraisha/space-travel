import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
/* eslint-disable import/extensions */
import missionSlice from './mission/mission';
import rocketsReducer from './Rocket/rokect-reducer';

const rootReducer = combineReducers({
  mission: missionSlice,
  rockets: rocketsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
export default store;
