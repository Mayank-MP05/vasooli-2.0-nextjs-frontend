import "@/styles/globals.css";
import type { AppProps } from "next/app";

// DOCS: Redux related imports
import { Provider, useSelector } from "react-redux";
import store from "@/redux/store";
import { createTheme } from "@mui/material";
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
import CommonLayout from "@/components/common/common-layout";
declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}



export default function App({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>

      <CommonLayout />
      <Component {...pageProps} />

    </Provider>
  );
}
