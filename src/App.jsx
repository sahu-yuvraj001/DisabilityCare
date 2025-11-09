import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Survey from "./pages/Survey";
import Footer from "./components/Footer";
import About from "./pages/About";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/about" element={<About />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
