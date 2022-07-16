import { createReducer } from "@reduxjs/toolkit";
import { setSelectedUser } from "./actions";

export const initialState = {
  selectedUser: "",
};

const socialMediaReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setSelectedUser, (state, { payload }) => {
      state.selectedUser = payload;
    });
});

export default socialMediaReducer;
