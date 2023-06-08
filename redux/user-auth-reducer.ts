import { createSlice } from "@reduxjs/toolkit";

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: {
    userDetails: {}
  },
  reducers: {
    RxUpdateUserCredentials: (state, action) => {
      const { customer_id, authorization, username } = action.payload;
      state.userDetails = { customer_id, authorization, username }
    }
  },
});

export default userAuthSlice;

export const {
  RxUpdateUserCredentials,
} = userAuthSlice.actions;

export const userAuthActions = userAuthSlice.actions;
