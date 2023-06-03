import React from "react";
import { Typography, TextField, Button } from "@mui/material";

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

const LogInBox = () => {
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
        <Button variant="text">Don't have an account</Button>
      </RowDiv>
    </>
  );
};

export default LogInBox;
