import { createSlice } from "@reduxjs/toolkit";

const uiControlsSlice = createSlice({
  name: "uiControls",
  initialState: {
    theme: "green",
    userModal: {
      isOpen: false,
      userModalEnumToShow: "LOGIN"
    }
  },
  reducers: {
    RxUpdateTheme: (state, action) => {
      state.theme = action.payload;
    },
    RxUpdateUserModal: (state, action) => {
      const { isOpen, userModalEnumToShow } = action.payload;
      state.userModal.isOpen = isOpen;
      state.userModal.userModalEnumToShow = userModalEnumToShow;
    },
  },
});

export default uiControlsSlice;

export const {
  RxUpdateTheme,
  RxUpdateUserModal,
} = uiControlsSlice.actions;

export const uiControlsActions = uiControlsSlice.actions;
