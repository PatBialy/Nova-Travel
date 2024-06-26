import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Services from "./pages/Services";
import About from "./pages/About";
import Hero from "./components/Hero";
import ContactUs from "./pages/ContactUs";
import Tours from "./pages/Tours";
import TourDetails from "./pages/TourDetails";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:id" element={<TourDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
