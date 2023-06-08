import { createSlice } from "@reduxjs/toolkit";

const uiControlsSlice = createSlice({
  name: "uiControls",
  initialState: {
    theme: "green",
  },
  reducers: {
    RxUpdateTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export default uiControlsSlice;

export const {
  RxUpdateTheme,
} = uiControlsSlice.actions;

export const uiControlsActions = uiControlsSlice.actions;
