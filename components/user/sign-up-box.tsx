import React from "react";
import { TextField, Typography, Button, Link } from "@mui/material";

import { CustomFormInput, RowDiv } from "../common/styled-base-components";
import { useDispatch, useSelector } from "react-redux";
import { RxUpdateUserModal } from "@/redux/ui-controls-reducer";

const SignUpBox = () => {
  const dispatch = useDispatch();
  const {
    isOpen,
    userModalEnumToShow,
  } = useSelector((state) => state.uiControls.userModal);

  const moveTLoginBox = () => {
    dispatch(RxUpdateUserModal({
      isOpen: true,
      userModalEnumToShow: "LOGIN",
    }));
  }

  return (
    <>
      <Typography variant="h4" component="p" style={{ marginBottom: "10px" }}>
        Register a new user
      </Typography>
      <CustomFormInput label="Email ID" variant="outlined" />
      <CustomFormInput type="password" label="Password" variant="outlined" />
      <CustomFormInput type="password" label="Password" variant="outlined" />
      <RowDiv>
        <Button variant="contained">Sign Up</Button>
      </RowDiv>
      <RowDiv>
        <Button variant="text" onClick={moveTLoginBox}>Already have an account</Button>
      </RowDiv>
    </>
  );
};

export default SignUpBox;
