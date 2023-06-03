import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  CardTitle,
  Typography,
} from "@mui/material";
import {
  AmtTxnCardCol,
  TxnCardCol,
  TxnCardRow,
} from "../common/styled-base-components";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from '@mui/icons-material/Delete';

const TransactionCard = () => {
  return (
    <div>
      <Card style={{ borderRadius: "10px", margin: "20px" }}>
        <CardActions>
          <TxnCardRow>
            <div style={{ marginLeft: "auto" }}>
              <Button
                variant="outlined"
                color="error"
                style={{ marginRight: "10px" }}
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>

              <Button
                color="info"
                variant="outlined"
                style={{ marginRight: "10px" }}
                startIcon={<CreateIcon />}
              >
                Edit
              </Button>
            </div>
          </TxnCardRow>
        </CardActions>
        <CardContent>
          <TxnCardRow>
            <TxnCardCol>
              <TxnCardRow>
                <Typography variant="h6">Title: renting an house</Typography>
              </TxnCardRow>
              <TxnCardRow>
                <Typography variant="p">
                  Description:Rent: The cost of renting a property, such as an
                  office space or a home.
                </Typography>
              </TxnCardRow>
              <TxnCardRow>
                <Typography variant="p">Category:Rent</Typography>
                <Typography variant="p" style={{ marginLeft: "auto" }}>
                  Date:06/11/2023
                </Typography>
              </TxnCardRow>
            </TxnCardCol>
            <AmtTxnCardCol>
              <TxnCardRow>$100</TxnCardRow>
            </AmtTxnCardCol>
          </TxnCardRow>
        </CardContent>
        <hr />
        <CardActions>
          <TxnCardRow>
            <div style={{ marginLeft: "auto" }}>
              <Button
                variant="outlined"
                color="error"
                style={{ marginRight: "10px" }}
              >
                Decline
              </Button>

              <Button
                color="success"
                variant="contained"
                style={{ marginRight: "10px" }}
              >
                Pay
              </Button>
            </div>
          </TxnCardRow>
        </CardActions>
      </Card>
    </div>
  );
};

export default TransactionCard;
