import "@/styles/globals.css";
import type { AppProps } from "next/app";

// DOCS: Redux related imports
import { Provider } from "react-redux";
import store from "@/redux/store";
import { createTheme } from "@mui/material";
import { green, orange } from "@mui/material/colors";
import { ThemeProvider } from "@emotion/react";
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
// DOCS: MUI Imports
const theme = createTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    primary: {
      main: green[500],
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
