import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaUserAlt, FaCertificate, FaUserTie, FaUser, FaUniversity } from "react-icons/fa";
import { AiTwotoneFileExclamation } from "react-icons/ai";
import { RiAdminFill } from "react-icons/ri";
import axios from 'axios';


const Dashboard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dashboards,setDashboards]=useState([]);  

  useEffect(()=>{
    getDashboard();
},[])

const getDashboard=()=>{
    axios.get('http://localhost:8080/dashboard').then(response=>{   
    console.log(response,"console from get dashboards method")
     setDashboards(response?.data)
    }).catch(error=>{
        console.log(error)
    })
}

const dashboardItems =[
  { 
    name: "Student",
    icon: <FaUser />,
    to:"/Dashboard/Student",
  },
  {
    name: "Admin",
    icon: <RiAdminFill />,
    to:"/Dashboard/Admin",
  },
  {
    name: "Certificate",
    icon: <FaCertificate/>,
    to:"/Dashboard/Certificate",
  },
  {
    name: "Colleges ",
    icon: <FaUniversity />,
    to:"/Dashboard/College",
  },
  {
    name: "Placements ",
    icon: <AiTwotoneFileExclamation />,
    to:"/Dashboard/Placement",
  },
  {
    name: "User ",
    icon: <FaUserTie />,
    to:"/Dashboard/User",
  },
];

  return (
    <div className="dashboardContainer">
      <div className='stats'>
      {dashboards.map((item, index) => (
          <Link to={dashboardItems[index].to} key={index}>
            <div className={`stats ${activeIndex === index ? "active" : ""}`}>
              <div className="sta">{dashboardItems[index].icon}</div>
              <div className="sta">{item.count}</div>
              <div className="sta">{item.name}</div>
              
            </div>
          </Link>
          ))}
        
      </div>
      </div>
    
      
  )

}

export default Dashboard;