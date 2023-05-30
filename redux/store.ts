import { configureStore } from "@reduxjs/toolkit";
import uiControlsSlice from "./ui-controls-reducer";

const store = configureStore({
  reducer: {
    icon: uiControlsSlice.reducer,
  },
});

export default store;
