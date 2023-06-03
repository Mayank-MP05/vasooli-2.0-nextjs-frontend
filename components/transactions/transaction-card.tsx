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
  Chip,
} from "@mui/material";
import {
  AmtTxnCardCol,
  TxnCardCol,
  TxnCardRow,
} from "../common/styled-base-components";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";

const chipStyles = {
  margin: "0 5px",
  borderRadius: "5px",
};

const TransactionCard = () => {
  return (
    <div>
      <Card
        style={{
          borderRadius: "10px",
          margin: "20px",
          border: "2px solid black",
        }}
      >
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
                <Chip label="Title" color="primary" style={chipStyles} />
                <Typography variant="h6">renting an house</Typography>
              </TxnCardRow>
              <TxnCardRow>
                <Chip label="Description" color="primary" style={chipStyles} />
                <Typography variant="p">
                  Description:Rent: The cost of renting a property, such as an
                  office space or a home.
                </Typography>
              </TxnCardRow>
              <TxnCardRow>
                <Chip label="Category" color="primary" style={chipStyles} />
                <Typography variant="p">Rent</Typography>
                <Typography variant="p" style={{ marginLeft: "auto" }}>
                  <Chip label="Date" color="primary" style={chipStyles} />
                  06/11/2023
                </Typography>
              </TxnCardRow>
            </TxnCardCol>
            <AmtTxnCardCol>
              <Typography variant="h4"> $100</Typography>
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
