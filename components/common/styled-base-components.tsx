import { styled } from "@mui/system";
import { TextField } from "@mui/material";

export const CustomFormInput = styled(TextField)`
  width: 100%;
  margin: 10px auto;
`;
export const RowDiv = styled("div")`
  width: 100%;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TxnCardRow = styled("div")`
  width: 100%;
  margin: 10px auto;
  display: flex;
  // justify-content: center;
  // align-items: center;
`;
export const TxnCardCol = styled("div")`
  margin: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const AmtTxnCardCol = styled("div")`
  margin: 10px;
  width: 150px;
  height: 150px;
  border-radius: 10px;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
