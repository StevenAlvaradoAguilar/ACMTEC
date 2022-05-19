import Home from "./components/Home"
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import Information from "./components/common/Information";
import Monitoring from "./components/Monitoring";
import React, { useEffect } from "react";


function App() {
  return (
    <Routes className="App">
        <Route path="/" element={<Home />} />
        <Route path="/Monitoring" element={<Monitoring />} />
        <Route path="/Information" element={<Information />} />
        <Route path="/About" element={<About />} />
    </Routes>
  );
}

export default App;
