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
  display: flex;
  flex-direction: column;
`;
export const AmtTxnCardCol = styled("div")`
  margin: 10px;
  width: 100px;
  height: 100%;
  background: white;
  color: black;
  display: flex;
  flex-direction: column;
`;
