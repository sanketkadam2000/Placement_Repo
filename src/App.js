import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Home from "./screens/home";
import Login from "./screens/login";
import Registration from "./screens/registration";
function App() {
  return (
      <>
      <Router>
        <Routes>
        <Route path="/" element={<Header />} exact /> 
        <Route path="/Login" element={<Login />} exact />
        <Route path="/Registration" element={<Registration />} exact />
        </Routes>
      </Router>
    </>
    
  );
}
  


export default App;
