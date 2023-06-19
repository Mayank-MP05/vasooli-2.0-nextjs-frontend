import React, { useState, useEffect } from "react";
import { TextField, Typography, Button } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import { CustomFormInput, RowDiv } from "../common/styled-base-components";
import { validateEmail } from "@/utils/validations";
import { useDispatch, useSelector } from "react-redux";

const EditProfileBox = () => {
  // Redux Hooks Here
  const dispatch = useDispatch();
  const {
    customerId,
    emailId,
    username,
    mobileNo,
    fullName = '',
  } = useSelector((state) => state.userAuth);

  // React Hooks Here
  const [editProfileFormData, setEditProfileFormData] = useState({
    emailId,
    username,
    mobileNo,
    fullName,
  })

  const [formdataErrorObj, setFormdataErrorObj] = useState({
    emailId: { isError: false, errMsg: '' },
    username: { isError: false, errMsg: '' },
    mobileNo: { isError: false, errMsg: '' },
    fullName: { isError: false, errMsg: '' }
  });

  const [apiLoading, setApiLoading] = useState(false);
  const [isContentEditable, setIsContentEditable] = useState(false);

  const fieldChangeHandler = (fieldName: string) => (e: any) => {
    // Update the field value to react state
    if (fieldName === "mobileNo") {
      setEditProfileFormData({
        ...editProfileFormData,
        [fieldName]: e.target.value.trim().slice(0, 10),
      });
    } else {
      setEditProfileFormData({
        ...editProfileFormData,
        [fieldName]: e.target.value.trim(),
      });
    }
  }

  const editButtonClicked = () => {
    setIsContentEditable(true);
  }

  const logoutButtonClicked = () => {
    localStorage.removeItem("persist:root");
    window.location.reload();
  }

  const saveDetailsButtonClicked = () => {
    console.log(editProfileFormData);
    // Validate the input fields
    if (!validateEmail(editProfileFormData.emailId)) {
      setFormdataErrorObj({
        ...formdataErrorObj,
        emailId: { isError: true, errMsg: "Please enter a valid email ID" },
      });
      return;
    }

    if (editProfileFormData.username.length < 3) {
      setFormdataErrorObj({
        ...formdataErrorObj,
        username: { isError: true, errMsg: "Username must be at least 3 characters long" },
      });
      return;
    }

    if (editProfileFormData.mobileNo.length !== 10) {
      setFormdataErrorObj({
        ...formdataErrorObj,
        mobileNo: { isError: true, errMsg: "Please enter a valid mobile no" },
      });
      return;
    }

    if (editProfileFormData.fullName.length < 3) {
      setFormdataErrorObj({
        ...formdataErrorObj,
        fullName: { isError: true, errMsg: "Full name must be at least 3 characters long" },
      });
      return;
    }

    // If valid, call the API
    editProfileApiCall();
  }

  const editProfileApiCall = () => {
    setApiLoading(true);

  }

  return (
    <>
      <RowDiv>
        <Typography variant="h4" component="p" style={{ marginBottom: "10px" }}>
          User details
        </Typography>
        <Button startIcon={<CreateIcon />} style={{ marginLeft: "auto" }} onClick={editButtonClicked}>
          Edit
        </Button>
      </RowDiv>
      <CustomFormInput
        label="Email ID"
        variant="outlined"
        name="emailId"
        value={editProfileFormData.emailId}
        onChange={fieldChangeHandler('emailId')}
        error={formdataErrorObj.emailId.isError}
        helperText={formdataErrorObj.emailId.errMsg}
        disabled={!isContentEditable}
      />
      <CustomFormInput
        label="Username"
        variant="outlined"
        name="username"
        value={editProfileFormData.username}
        onChange={fieldChangeHandler('username')}
        error={formdataErrorObj.username.isError}
        helperText={formdataErrorObj.username.errMsg}
        disabled={!isContentEditable}
      />
      <CustomFormInput
        label="Mobile no"
        variant="outlined"
        name="mobileNo"
        value={editProfileFormData.mobileNo}
        onChange={fieldChangeHandler('mobileNo')}
        error={formdataErrorObj.mobileNo.isError}
        helperText={formdataErrorObj.mobileNo.errMsg}
        disabled={!isContentEditable}
      />
      <CustomFormInput
        label="Full Name"
        variant="outlined"
        name="fullName"
        value={editProfileFormData.fullName}
        onChange={fieldChangeHandler('fullName')}
        error={formdataErrorObj.fullName.isError}
        helperText={formdataErrorObj.fullName.errMsg}
        disabled={!isContentEditable}
      />
      <RowDiv>
        <Button variant="outlined" style={{ marginRight: "5px" }} onClick={logoutButtonClicked}>
          Log out
        </Button>
        <Button variant="contained" onClick={saveDetailsButtonClicked}>Save details</Button>
      </RowDiv>
    </>
  );
};

export default EditProfileBox;
