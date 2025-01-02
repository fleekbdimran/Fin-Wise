


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutUs from "./Component/AboutUs/AboutUs";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import ContactUs from './Component/ContactUs/ContactUs';
import OurService from "./Component/OurService/OurService";
import Dashboard from "./Component/Dashboard/Dashboard";
import UsefullTools from "./Component/UsefullTools/UsefullTools";

function App() {
  return (
    <Router>
      <div className="container mx-auto" style={{ fontFamily: "Poppins, sans-serif" }}>
        <Header />

        
        
        {/* Define Routes for Navigation */}
        <Routes>
        <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/ourservice" element={<OurService />} />
          <Route path="/usefulltools" element={<UsefullTools />} />
          
          
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;



