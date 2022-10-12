import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./utils/styles/reset.css"
import "./utils/styles/styles.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Error from './components/Error'

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
)
