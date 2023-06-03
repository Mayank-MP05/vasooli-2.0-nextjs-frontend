import React from "react";
import { TextField, Typography, Button, Link } from "@mui/material";

import { styled } from "@mui/system";
const CustomFormInput = styled(TextField)`
  width: 100%;
  margin: 10px auto;
`;
const RowDiv = styled("div")`
  width: 100%;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpBox = () => {
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
        <Button variant="text">Already have an account</Button>
      </RowDiv>
    </>
  );
};

export default SignUpBox;
