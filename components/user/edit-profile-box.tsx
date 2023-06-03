import React from "react";
import { TextField, Typography, Button } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import { CustomFormInput, RowDiv } from "../common/styled-base-components";

const EditProfileBox = () => {
  return (
    <>
      <RowDiv>
        <Typography variant="h4" component="p" style={{ marginBottom: "10px" }}>
          User details
        </Typography>
        <Button startIcon={<CreateIcon />} style={{ marginLeft: "auto" }}>
          Edit
        </Button>
      </RowDiv>
      <CustomFormInput label="Email ID" variant="outlined" />
      <CustomFormInput label="Username" variant="outlined" />
      <CustomFormInput label="Mobile no" variant="outlined" />
      <CustomFormInput label="Full Name" variant="outlined" />

      <RowDiv>
        <Button variant="outlined" style={{ marginRight: "5px" }}>
          Log out
        </Button>
        <Button variant="contained">Save details</Button>
      </RowDiv>
    </>
  );
};

export default EditProfileBox;
