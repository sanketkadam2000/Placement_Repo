import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Login from "./screens/login";
import Contact from "./screens/contact";
import Registration from "./screens/registration";
import About from "./screens/about";
import Home from "./screens/home";
import Navbar from "./components/Navbar";
function App() {
  return (
      <>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} exact /> 
        <Route path="/Login" element={<Login />} exact />
        <Route path="/Registration" element={<Registration />} exact />
        <Route path="/Contact" element={<Contact/>} exact />
        <Route path="/About" element={<About/>} exact />
        </Routes>
      </Router>
    </>
    
  );
}
  


export default App;
