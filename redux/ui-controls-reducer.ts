import { createSlice } from "@reduxjs/toolkit";

const uiControlsSlice = createSlice({
  name: "uiControls",
  initialState: {
    theme: "light",
  },
  reducers: {
    RxUpdateTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export default uiControlsSlice;

export const uiControlsActions = uiControlsSlice.actions;
