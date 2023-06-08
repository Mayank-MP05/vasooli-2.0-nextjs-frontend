import React, { useState, useEffect } from "react";
import { TextField, Typography, Button, Link } from "@mui/material";

import { CustomFormInput, RowDiv } from "../common/styled-base-components";
import { useDispatch, useSelector } from "react-redux";
import { RxUpdateUserModal } from "@/redux/ui-controls-reducer";
import APIClient from "@/utils/api-client";

const SignUpBox = () => {
  // Redux Hooks Here
  const dispatch = useDispatch();
  const {
    isOpen,
    userModalEnumToShow,
  } = useSelector((state) => state.uiControls.userModal);

  // React Hooks Here
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailIdErrMsg, setEmailIdErrMsg] = useState({
    isError: false,
    errMsg: "",
  });

  const [passwordErrMsg, setPasswordErrMsg] = useState({
    isError: false,
    errMsg: "",
  });

  const [confirmPasswordErrMsg, setConfirmPasswordErrMsg] = useState({
    isError: false,
    errMsg: "",
  });


  /**
   * Update the user modal to show the login box
   */
  const moveTLoginBox = () => {
    dispatch(RxUpdateUserModal({
      isOpen: true,
      userModalEnumToShow: "LOGIN",
    }));
  }

  /**
   * API Call to register a new user
   */
  const SignUpAPICall = () => {
    APIClient({
      route: "/user/register",
      method: "POST",
      payload: {
        email: "two@mail.com",
        password: "twopass",
        confirmPassword: "User Two",
      },
      headers: {},
      successFn: (res) => {
        console.log(res);
      },
      errorFn: (err) => {
        console.log(err);
      },
      finallyFn: () => { },
    })
  }

  const inputFieldChangeHandler = (inputType: string) => (e: any) => {
    switch (inputType) {
      case "emailId":
        setEmailId(e.target.value.trim());
        setEmailIdErrMsg({
          isError: false,
          errMsg: "",
        });
        break;
      case "password":
        setPassword(e.target.value);
        setPasswordErrMsg({
          isError: false,
          errMsg: "",
        });

        break;
      case "confirmPassword":
        setConfirmPassword(e.target.value);
        setConfirmPasswordErrMsg({
          isError: false,
          errMsg: "",
        });

        break;
      default:
        break;
    }
  }

  /**
   * Validates an email address using a regular expression.
   * @param {string} mail - The email address to be validated.
   * @returns {boolean} - Returns true if the email address is valid, false otherwise.
   */
  const validateEmail = (mail: string): boolean => {
    // The regular expression used to validate the email address.
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // Test the email address against the regular expression.
    if (emailRegex.test(mail)) {
      // If the email address is valid, return true.
      return true;
    }

    // If the email address is invalid, return false.
    return false;
  };


  const signUpBtnClickHandler = () => {
    // Validation checks for the input fields
    // Email id validation regex
    if (!validateEmail(emailId)) {
      setEmailIdErrMsg({
        isError: true,
        errMsg: "Please enter a valid email address",
      });
      return;
    }

    // Password validation regex
    if (password.length < 8) {
      setPasswordErrMsg({
        isError: true,
        errMsg: "Password should be atleast 8 characters long",
      });
      return;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      setConfirmPasswordErrMsg({
        isError: true,
        errMsg: "Passwords do not match",
      });
      return;
    }

    // API Call to register a new user
    SignUpAPICall();
  }

  return (
    <>
      <Typography variant="h4" component="p" style={{ marginBottom: "10px" }}>
        Register a new user
      </Typography>
      <CustomFormInput label="Email ID" variant="outlined"
        value={emailId}
        error={emailIdErrMsg.isError}
        helperText={emailIdErrMsg.errMsg}
        onChange={inputFieldChangeHandler("emailId")}
      />
      <CustomFormInput type="password" label="Password" variant="outlined"
        value={password}
        error={passwordErrMsg.isError}
        helperText={passwordErrMsg.errMsg}
        onChange={inputFieldChangeHandler("password")}
      />
      <CustomFormInput type="password" label="Confirm password" variant="outlined"
        value={confirmPassword}
        error={confirmPasswordErrMsg.isError}
        helperText={confirmPasswordErrMsg.errMsg}
        onChange={inputFieldChangeHandler("confirmPassword")}
      />
      <RowDiv>
        <Button variant="contained" onClick={signUpBtnClickHandler}>Sign Up</Button>
      </RowDiv>
      <RowDiv>
        <Button variant="text" onClick={moveTLoginBox}>Already have an account</Button>
      </RowDiv>
    </>
  );
};

export default SignUpBox;
