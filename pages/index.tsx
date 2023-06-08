import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useDispatch } from "react-redux";
import { uiControlsActions } from "@/redux/ui-controls-reducer";
import APIClient from "@/utils/api-client";
import ResponsiveAppBar from "@/components/common/top-navbar";
const { RxUpdateTheme } = uiControlsActions;
import Button from "@mui/material/Button";
import UserAuthModal from "@/components/common/login-modal";
import {
  Box,
  Typography,
  Container,
  Pagination,
  Tabs,
  Tab,
} from "@mui/material";
import TransactionCard from "@/components/transactions/transaction-card";
import { RowDiv } from "@/components/common/styled-base-components";
import TransactionAddEditModal from "@/components/transactions/transaction-add-edit-modal";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ConfirmDeleteModal from "@/components/transactions/confirm-delete-modal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("Home");

  const toggleThemeInRedux = () => {
    APIClient({
      route: "/notif/read/2",
      method: "GET",
      payload: {},
      headers: {},
      successFn: () => {},
      errorFn: (err: any) => {},
      finallyFn: () => {},
    });
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <Head>
        <title>Vasooli Money Manager</title>
        <meta name="description" content="Vasooli Money Manager" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/vasooli-bhai-logo.ico" />
      </Head>

      <ResponsiveAppBar />
      {/* <button onClick={toggleThemeInRedux}> Toggle Theme </button>
      <Button color="secondary" onClick={toggleThemeInRedux}>
        MUI Button
      </Button> */}
      <UserAuthModal />

      <Container style={{ marginTop: "10px" }}>
        <ConfirmDeleteModal />
        <TransactionAddEditModal />
        <RowDiv>
          <Pagination count={10} />
          <Box
            sx={{ marginLeft: "auto", borderBottom: 1, borderColor: "divider" }}
          >
            <Tabs
              variant="scrollable"
              value={activeTab}
              onChange={handleChange}
            >
              <Tab label="Transactions" style={{ textTransform: "none" }} />
              <Tab label="Payment Requests" style={{ textTransform: "none" }} />
              <Button
                variant="contained"
                startIcon={<AddCircleIcon />}
                style={{
                  textTransform: "none",
                  fontWeight: "bold",
                  color: "white",
                  margin: "0 10px",
                }}
              >
                Create
              </Button>
            </Tabs>
          </Box>
        </RowDiv>

        <Box style={{ marginTop: "10px" }}>
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
        </Box>
      </Container>
    </>
  );
}
