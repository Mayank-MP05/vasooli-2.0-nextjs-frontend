import { configureStore } from "@reduxjs/toolkit";
import uiControlsSlice from "./ui-controls-reducer";
import userAuthSlice from "./user-auth-reducer";

const store = configureStore({
  reducer: {
    uiControls: uiControlsSlice.reducer,
    userAuth: userAuthSlice.reducer,
  },
});

export default store;
