import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import EditProfileBox from "../user/edit-profile-box";
import LogInBox from "../user/login-box";
import SignUpBox from "../user/sign-up-box";
import { useDispatch, useSelector } from "react-redux";
import { RxUpdateUserModal } from "@/redux/ui-controls-reducer";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

export default function UserAuthModal() {
  const dispatch = useDispatch();
  const {
    isOpen,
    userModalEnumToShow,
  } = useSelector((state) => state.uiControls.userModal);

  const handleOpen = () => {
    dispatch(RxUpdateUserModal({
      isOpen: true,
      userModalEnumToShow: "LOGIN",
    }));
  }
  const handleClose = () => {
    dispatch(RxUpdateUserModal({
      isOpen: false,
      userModalEnumToShow: "NONE",
    }));
  }


  return (
    <div>
      <Button onClick={handleOpen}>User Auth Modal</Button>
      <Modal open={isOpen} onClose={handleClose}>
        <Box sx={style}>
          {userModalEnumToShow === "EDIT_PROFILE" ? (
            <EditProfileBox />
          ) : userModalEnumToShow === "LOGIN" ? (
            <LogInBox />
          ) : userModalEnumToShow === "SIGN_UP" ? (
            <SignUpBox />
          ) : ""}
        </Box>
      </Modal>
    </div>
  );
}
