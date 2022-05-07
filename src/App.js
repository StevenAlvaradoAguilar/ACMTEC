import Home from "./components/Home"
import About from "./components/About";
import Navbar from "./components/common/Navbar";
import Map from "./components/Map";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes className="App">
        <Route path="/" element={<Home />} />
        <Route path="/monitoring" element={<Home />} />
        <Route path="/information" element={<Home />} />
        <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
