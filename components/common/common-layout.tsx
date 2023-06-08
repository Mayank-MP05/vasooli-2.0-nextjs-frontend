import React from "react";
import { CircularProgress } from "@mui/material";

const parentDivStyles = {
  display: "flex",
  position: "absolute",
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  background: "rgb(255,255,255,0.8)",
  zIndex: "50",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  //   height: "100vh",
};

const CommonLayout = () => {
  const isLoading = false;
  return (
    <>
      {isLoading ? (
        <div style={parentDivStyles}><CircularProgress /></div>
      ) : (
        ""
      )}
    </>
  );
};

export default CommonLayout;
