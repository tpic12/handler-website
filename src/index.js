import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F2D7B6",
    },
    secondary: {
      //accents on app bar
      main: "#D99923",
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
