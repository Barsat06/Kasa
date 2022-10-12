import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./utils/styles/reset.css"
import Footer from "./components/Footer/Footer";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route />
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);
