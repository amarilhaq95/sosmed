import { combineReducers } from "@reduxjs/toolkit";
import socialMediaReducer from './features/socialMedia/reducer';
import { socialMediaApiReducer } from "./features/socialMedia/service";


/** you can initiate all reducer in here */
const globalReducers = combineReducers({
  ...socialMediaApiReducer,
  socialMediaReducer,
});

export default globalReducers;