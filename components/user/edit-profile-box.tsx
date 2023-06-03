import React from "react";
import { TextField } from "@mui/material";
import { Typography } from "@mui/material";

import { styled } from "@mui/system";
const CustomFormInput = styled(TextField)`
  width: 100%;
  margin: 10px auto;
`;

const EditProfileBox = () => {
  return (
    <>
      <Typography variant="h4" component="p">
        User details
      </Typography>
      <CustomFormInput
        id="outlined-basic"
        label="Email ID"
        variant="outlined"
      />
      <CustomFormInput
        id="outlined-basic"
        label="Password"
        variant="outlined"
      />
    </>
  );
};

export default EditProfileBox;
