// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PreNavbar from "./components/PreNavbar";
import ScrollToTop from "./components/Scrolltotop";
import Contributors from "./components/Contributors"; // Import the Contributors component
import Home from "./components/Home"; // Import your Home component or main page component

function App() {
  return (
    <Router>
      <PreNavbar />
      <ScrollToTop />
      {/* Define Routes here */}
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        {/* Main page or home component */}
        <Route path="/Contributors" element={<Contributors />} />{" "}
        {/* Contributors page */}
      </Routes>
    </Router>
  );
}

export default App;
