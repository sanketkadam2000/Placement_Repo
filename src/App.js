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
import AddAdmin from "./screens/AddAdmin";
import Course from "./services/Course";
import AddCertificate from "./screens/AddCertificate";
import AddCollege from "./screens/AddCollege";
import AddPlacement from "./screens/AddPlacement";
import AddUser from "./screens/AddUser";
import AddCourse from "./screens/AddCourse";

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
        <Route path="/AddAdmin" element={<AddAdmin/>} exact />
        <Route path="/AddCertificate" element={<AddCertificate/>} exact />
        <Route path="/AddCollege" element={<AddCollege/>} exact />
        <Route path="/AddPlacement" element={<AddPlacement/>} exact />
        <Route path="/AddUser" element={<AddUser/>} exact />
        <Route path="/AddCourse" element={<AddCourse/>} exact />
        <Route path="/Dashboard" element={<Dashboard />} exact />
        <Route path="/Student" element={<Student />} exact />
        <Route path="/Admin" element={<Admin/>} exact />
        <Route path="/College" element={<College/>} exact />
        <Route path="/Certificate" element={<Certificate/>} exact />
        <Route path="/Placement" element={<Placement/>} exact />
        <Route path="/User" element={<User/>} exact />
        <Route path="/COurse" element={<Course/>} exact />
        </Routes>
        </Sidebar>
        </Router>
        
      
    </>
    
  );
}
  


export default App;
