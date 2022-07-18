import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import missionReducer from './mission/mission';

const rootReducer = combineReducers({
 missionReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
export default store;