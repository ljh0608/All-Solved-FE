import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import GlobalStyle from "./styles/GlobalStyle";
import { theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import Router from "./Router/Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router></Router>
  </ThemeProvider>,
);
