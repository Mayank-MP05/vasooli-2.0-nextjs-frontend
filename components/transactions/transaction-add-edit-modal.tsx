import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import { CustomFormInput, RowDiv } from "../common/styled-base-components";
// import DatePicker from "@mui/lab/DatePicker";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";

import { CssBaseline } from "@mui/material";
// import "react-dates/lib/css/_datepicker.css";

import "flatpickr/dist/themes/material_green.css";

import Flatpickr from "react-flatpickr";
import { FormLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import { FormControlLabel } from "@mui/material";

import Autocomplete from "@mui/lab/Autocomplete";

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

export default function TransactionAddEditModal() {
  const [open, setOpen] = React.useState(1);
  const [selected, setSelected] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [startDate, setStartDate] = useState(new Date());
  const [checked, setChecked] = useState(false);
  const [date, setDate] = useState("");

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const options = ["Option 1", "Option 2", "Option 3"];

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleChangeSelect = (val) => {
    setSelected(val);
  };

  const handleChangeDate = (date) => {
    setDate(date);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Add new transaction</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography
            variant="h5"
            component="p"
            style={{ marginBottom: "10px" }}
          >
            Add new transaction
          </Typography>

          <CustomFormInput label="Transaction Title" variant="outlined" />
          <CustomFormInput
            label="Transaction Description"
            multiline
            rows={5}
            variant="outlined"
          />
          <RowDiv>
            <FormControl fullWidth style={{ margin: "10px 0" }}>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="Category"
                value={selected}
                label="Category"
                onChange={handleChangeSelect}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            {/* <DatePicker
              style={{
                background: "red",
                margin: "10px",
                padding: "10px",
              }}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            /> */}
            <CssBaseline />
            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Select Date"
                value={selectedDate}
                onChange={handleDateChange}
                renderInput={(params) => <input {...params} />}
              />
            </LocalizationProvider> */}
            {/* <SingleDatePicker
              date={date} // momentPropTypes.momentObj or null
              onDateChange={(date) => setSelectedDate(date)} // PropTypes.func.isRequired
              // focused={false} // PropTypes.bool
              // onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
              id="single-date-picker-id" // PropTypes.string.isRequired,
            /> */}

            {/* <FormLabel>Date: </FormLabel> */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "5px",
              }}
            >
              <InputLabel htmlFor="date-picker-id" style={{ fontSize: "10px" }}>
                Date
              </InputLabel>

              <Flatpickr
                id="date-picker-id"
                style={{
                  height: "45px",
                }}
                data-enable-time
                value={date}
                onChange={([date]) => {
                  setSelected(date);
                }}
              />
            </div>
          </RowDiv>

          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={handleCheckboxChange}
                color="primary"
              />
            }
            label="It is a payment request"
            labelPlacement="end"
          />

          <Autocomplete
            options={options}
            renderInput={(params) => (
              <TextField {...params} label="AutoComplete" />
            )}
          />

          <RowDiv>
            <Button color="success" variant="contained">
              Save
            </Button>
          </RowDiv>
        </Box>
      </Modal>
    </div>
  );
}
