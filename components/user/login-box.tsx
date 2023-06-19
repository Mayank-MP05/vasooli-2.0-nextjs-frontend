import React, { useState } from "react";
import { Typography, TextField, Button } from "@mui/material";
import { CustomFormInput, RowDiv } from "../common/styled-base-components";
import { useDispatch, useSelector } from "react-redux";
import { RxUpdateUserModal } from "@/redux/ui-controls-reducer";
import APIClient from "@/utils/api-client";
import { validateEmail } from "@/utils/validations";

const LogInBox = () => {
  // Redux Hooks Here
  const dispatch = useDispatch();
  const {
    isOpen,
    userModalEnumToShow,
  } = useSelector((state) => state.uiControls.userModal);

  // React Hooks Here
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const [emailIdErrMsg, setEmailIdErrMsg] = useState({
    isError: false,
    errMsg: "",
  });

  const [passwordErrMsg, setPasswordErrMsg] = useState({
    isError: false,
    errMsg: "",
  });

  const moveToSignUpBox = () => {
    dispatch(RxUpdateUserModal({
      isOpen: true,
      userModalEnumToShow: "SIGN_UP",
    }));
  }

  const loginButtonClicked = () => {
    // Validate the input fields
    if (!validateEmail(emailId)) {
      setEmailIdErrMsg({
        isError: true,
        errMsg: "Please enter a valid email ID",
      });
      return;
    }

    // If valid, call the API
    APIClient({
      route: "/user/login",
      method: "POST",
      payload: {
        email: emailId,
        password: password,
      },
      headers: {},
      successFn: (res: any) => {
        // If API call is successful, close the modal
        console.log(res);
      },
      errorFn: (err: any) => {
        // If API call is unsuccessful, show the error message
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

        break;
      default:
        break;
    }
  }

  const loginAPICall = () => {
    APIClient({
      route: "/user/login",
      method: "POST",
      payload: {
        email: emailId,
        password: password,
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

  const loginButtonClickHandler = () => {
    if (emailId === "") {
      setEmailIdErrMsg({
        isError: true,
        errMsg: "Email ID is required",
      });
    }

    if (!validateEmail(emailId)) {
      setEmailIdErrMsg({
        isError: true,
        errMsg: "Please enter a valid email ID",
      });
    }

    if (password === "") {
      setPasswordErrMsg({
        isError: true,
        errMsg: "Password is required",
      });
    }

    if (emailId !== "" && password !== "") {
      loginAPICall();
    }
  }

  return (
    <>
      <Typography variant="h4" component="p" style={{ marginBottom: "10px" }}>
        Log In
      </Typography>
      <CustomFormInput label="Email ID" variant="outlined"
        value={emailId}
        onChange={inputFieldChangeHandler("emailId")}
      />
      <CustomFormInput type="password" label="Password" variant="outlined"
        value={password}
        onChange={inputFieldChangeHandler("password")}
      />
      <RowDiv>
        <Button variant="contained" onClick={loginButtonClickHandler}>Log In</Button>
      </RowDiv>
      <RowDiv>
        <Button variant="text" onClick={moveToSignUpBox}>Don't have an account</Button>
      </RowDiv>
    </>
  );
};

export default LogInBox;
