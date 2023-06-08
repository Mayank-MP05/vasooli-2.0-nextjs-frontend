import React from "react";
import { Typography, TextField, Button } from "@mui/material";
import { CustomFormInput, RowDiv } from "../common/styled-base-components";
import { useDispatch, useSelector } from "react-redux";
import { RxUpdateUserModal } from "@/redux/ui-controls-reducer";

const LogInBox = () => {
  const dispatch = useDispatch();
  const {
    isOpen,
    userModalEnumToShow,
  } = useSelector((state) => state.uiControls.userModal);

  const moveToSignUpBox = () => {
    dispatch(RxUpdateUserModal({
      isOpen: true,
      userModalEnumToShow: "SIGN_UP",
    }));
  }

  return (
    <>
      <Typography variant="h4" component="p" style={{ marginBottom: "10px" }}>
        Log In
      </Typography>
      <CustomFormInput label="Email ID" variant="outlined" />
      <CustomFormInput type="password" label="Password" variant="outlined" />
      <RowDiv>
        <Button variant="contained">Log In</Button>
      </RowDiv>
      <RowDiv>
        <Button variant="text" onClick={moveToSignUpBox}>Don't have an account</Button>
      </RowDiv>
    </>
  );
};

export default LogInBox;
