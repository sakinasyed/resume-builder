import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Templates from "./components/Templates/Templates";
import Body1 from "./components/Body/Body1";
import Body2 from "./components/Body/Body2";
import Body3 from "./components/Body/Body3";
import Body4 from "./components/Body/Body4";
import Help from "./components/Help";
// import ResumeExamples from "./components/ResumeExample/ResumeExamples";

function App(props) {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/body1" element={<Body1 />} />
        <Route path="/body2" element={<Body2 />} />
        <Route path="/body3" element={<Body3 />} />
        <Route path="/body4" element={<Body4 />} />
        <Route path="/help" element={<Help />} />
        {/* <Route path="/resumexamples" element={<ResumeExamples />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
