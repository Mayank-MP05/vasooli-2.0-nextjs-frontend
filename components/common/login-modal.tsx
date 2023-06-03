import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import EditProfileBox from "../user/edit-profile-box";
import LogInBox from "../user/login-box";
import SignUpBox from "../user/sign-up-box";

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
  const [open, setOpen] = React.useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <EditProfileBox />
          {/* <LogInBox /> */}
          {/* <SignUpBox /> */}
        </Box>
      </Modal>
    </div>
  );
}
