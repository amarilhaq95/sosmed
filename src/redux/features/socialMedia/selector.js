/**
 * get data from reducers
 */

import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectInitialState = (state) => state.socialMediaReducer || initialState;

export const selectedUser = () =>
  createSelector(selectInitialState, (state) => state.selectedUser);
