import { createSlice } from "@reduxjs/toolkit";

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: {
    customerId: "",
    authorization: "",
    emailId: "",
    isUserLoggedIn: false,
  },
  reducers: {
    RxUpdateUserCredentials: (state, action) => {
      const { customerId, authorization, emailId, isUserLoggedIn } = action.payload;
      state.customerId = customerId;
      state.authorization = authorization;
      state.emailId = emailId;
      state.isUserLoggedIn = isUserLoggedIn;
    }
  },
});

export default userAuthSlice;

export const {
  RxUpdateUserCredentials,
} = userAuthSlice.actions;

export const userAuthActions = userAuthSlice.actions;
