import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/home" element={<App />}></Route>
    </Routes>
  </BrowserRouter>,
);
