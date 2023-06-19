import React, { useState, useEffect } from "react";
import { TextField, Typography, Button, Link } from "@mui/material";

import { CustomFormInput, RowDiv } from "../common/styled-base-components";
import { useDispatch, useSelector } from "react-redux";
import { RxUpdateUserModal } from "@/redux/ui-controls-reducer";
import APIClient from "@/utils/api-client";
import { validateEmail } from "@/utils/validations";
import { CircularProgress } from '@mui/material';
import { RxUpdateUserCredentials } from "@/redux/user-auth-reducer";

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

  const [apiLoading, setApiLoading] = useState(false);

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
    setApiLoading(true);
    APIClient({
      route: "/user/register",
      method: "POST",
      payload: {
        email: emailId,
        password: password,
        confirmPassword: confirmPassword,
      },
      headers: {},
      successFn: (res) => {
        const registerApiResponse = res.data;
        const regiserApiResponseStatus = registerApiResponse.statusCode;

        if (regiserApiResponseStatus === 2000) {
          // Update the user credentials in the redux store
          dispatch(RxUpdateUserCredentials({
            customerId: registerApiResponse.customer_id,
            emailId: registerApiResponse.email_id,
            authorization: registerApiResponse.authorization,
            isUserLoggedIn: true,
            fullName: registerApiResponse.full_name,
            mobileNo: registerApiResponse.mobile_no,
            username: registerApiResponse.username,
          }));

          // Close the modal
          dispatch(RxUpdateUserModal({
            isOpen: false,
            userModalEnumToShow: "NONE",
          }));
        } else {
          // Show the error message
          setEmailIdErrMsg({
            isError: true,
            errMsg: registerApiResponse.message,
          });
        }
      },
      errorFn: (err) => {
        console.log(err);
      },
      finallyFn: () => {
        setApiLoading(false);
      },
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
        <Button variant="contained" onClick={signUpBtnClickHandler} disabled={apiLoading}>{apiLoading ? <CircularProgress size={30} /> : "Sign Up"}</Button>
      </RowDiv>
      <RowDiv>
        <Button variant="text" onClick={moveTLoginBox}>Already have an account</Button>
      </RowDiv>
    </>
  );
};

export default SignUpBox;
