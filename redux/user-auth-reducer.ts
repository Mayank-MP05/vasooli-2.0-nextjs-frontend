import { createSlice } from "@reduxjs/toolkit";

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: {
    customerId: "",
    authorization: "",
    emailId: "",
    isUserLoggedIn: false,
    username: "",
    fullName: "",
    mobileNo: "",
  },
  reducers: {
    RxUpdateUserCredentials: (state, action) => {
      const { customerId, authorization, emailId, isUserLoggedIn, username, mobileNo, fullName } = action.payload;
      state.customerId = customerId;
      state.authorization = authorization;
      state.emailId = emailId;
      state.isUserLoggedIn = isUserLoggedIn;

      state.username = username;
      state.mobileNo = mobileNo;
      state.fullName = fullName;
    }
  },
});

export default userAuthSlice;

export const {
  RxUpdateUserCredentials,
} = userAuthSlice.actions;

export const userAuthActions = userAuthSlice.actions;
