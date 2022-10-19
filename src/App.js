import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from "./screens/login";
import Contact from "./screens/contact";
import Registration from "./screens/registration";
import About from "./screens/about";
import Home from "./screens/home";
import AddStudent from "./screens/AddStudent";
import Sidebar from "./components/Sidebar/Sidebar";
import Student from "./services/Student";
import Admin from "./services/Admin";
import Placement from "./services/Placement";
import User from "./services/User";
import College from "./services/College";
import Certificate from "./services/Certificates";
import Dashboard from "./services/Dashboard";
import EditStudent from "./screens/EditStudent";

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
        <Route path="/Sidebar" element={<Sidebar/>} exact />
        
        </Routes>
      </Router>  
      <Router>
      <Sidebar>
        <Routes> 
        <Route path="/AddStudent" element={<AddStudent/>} exact />
        <Route path="/EditStudent" element={<EditStudent/>} exact />
        <Route path="/Dashboard" element={<Dashboard />} exact />
        <Route path="/Student" element={<Student />} exact />
        <Route path="/Admin" element={<Admin/>} exact />
        <Route path="/College" element={<College/>} exact />
        <Route path="/Certificate" element={<Certificate/>} exact />
        <Route path="/Placement" element={<Placement/>} exact />
        <Route path="/User" element={<User/>} exact />
        </Routes>
        </Sidebar>
        </Router>
        
      
    </>
    
  );
}
  


export default App;
