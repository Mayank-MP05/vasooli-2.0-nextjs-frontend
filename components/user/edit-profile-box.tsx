import React from "react";
import { TextField, Typography, Button } from "@mui/material";

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

const EditProfileBox = () => {
  return (
    <>
      <Typography variant="h4" component="p" style={{ marginBottom: "10px" }}>
        User details
      </Typography>
      <CustomFormInput
        id="outlined-basic"
        label="Email ID"
        variant="outlined"
      />
      <RowDiv>
        <Button variant="contained">Log out</Button>
      </RowDiv>
    </>
  );
};

export default EditProfileBox;
