import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
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
  useTheme,
} from "@mui/material";
import TransactionCard from "@/components/transactions/transaction-card";
import { RowDiv } from "@/components/common/styled-base-components";
import TransactionAddEditModal from "@/components/transactions/transaction-add-edit-modal";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ConfirmDeleteModal from "@/components/transactions/confirm-delete-modal";


import {
  amber,
  blue,
  blueGrey,
  brown,
  common,
  cyan,
  deepOrange,
  deepPurple,
  green,
  grey,
  indigo,
  lightBlue,
  lightGreen,
  lime,
  orange,
  pink,
  purple,
  red,
  teal,
  yellow
} from "@mui/material/colors";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { colorStrToObjMapper } from "@/utils/color-str-to-obj-mapper";
import { collectGenerateParams } from "next/dist/build/utils";
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
      successFn: () => { },
      errorFn: (err: any) => { },
      finallyFn: () => { },
    });
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  const themeColorString: string = useSelector((state: any) => state.uiControls.theme);

  // DOCS: MUI Imports
  const theme = createTheme({
    status: {
      danger: orange[500],
    },
    palette: {
      primary: {
        main: colorStrToObjMapper(themeColorString)[500],
      },
    },
  });


  return (
    <>
      <Head>
        <title>Vasooli Money Manager</title>
        <meta name="description" content="Vasooli Money Manager" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/vasooli-bhai-logo.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar />

        <Container style={{ marginTop: "10px" }}>
          <UserAuthModal />
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
      </ThemeProvider>

    </>
  );
}
