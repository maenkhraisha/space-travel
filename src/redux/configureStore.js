import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import missionSlice from './mission/mission';

const rootReducer = combineReducers({
  mission: missionSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
export default store;
