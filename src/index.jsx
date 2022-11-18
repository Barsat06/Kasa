import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./utils/styles/styles.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Error from "./components/Error"
import Home from "./pages/Home"
import DetailPages from "./pages/DetailPages"
import About from "./pages/About"

const root = createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/locations/:locationId" element={<DetailPages />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
