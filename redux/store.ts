import { configureStore } from "@reduxjs/toolkit";
import uiControlsSlice from "./ui-controls-reducer";

const store = configureStore({
  reducer: {
    uiControls: uiControlsSlice.reducer,
  },
});

export default store;
