import React, { useState } from "react";

import {
  Modal,
  Button,
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

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
  borderRadius: "20px",
};

const ConfirmDeleteModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const onConfirm = () => {};
  return (
    <>
      <Button onClick={handleOpenModal}>Delete Confirmation</Button>
      <Dialog
        open={open}
        onClose={handleCloseModal}
        style={{ padding: "10px" }}
      >
        <DialogTitle style={{ margin: "5px", padding: "0px" }}>
          Delete Confirmation
        </DialogTitle>
        <DialogContent style={{ margin: "5px", padding: "5px" }}>
          <p style={{ margin: "0px", padding: "0px" }}>
            Are you sure you want to delete?
          </p>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={onConfirm}
            variant="contained"
            color="error"
            autoFocus
          >
            Delete
          </Button>
          <Button onClick={handleCloseModal} variant="outlined">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ConfirmDeleteModal;
