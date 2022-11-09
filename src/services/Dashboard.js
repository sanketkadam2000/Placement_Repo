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
    // {dashboards.map((dashboard, index) => {
    //   console.log(dashboard, "from dashboard table data");
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
        {/* <div>
          <FaUserAlt/>
          <span className='sta' data-max='400'>0</span>
          <p>Student</p>
      </div>
      <div>
          <RiAdminFill />
          <span className='sta' data-max='400'>0</span>
          <p>Admin</p>
      </div>
      <div>
          <FaCertificate />
          <span className='sta' data-max='400'>0</span>
          <p>Certificate</p>
      </div>
      <div>
          <FaUniversity />
          <span className='sta' data-max='400'>0</span>
          <p>College</p>
      </div>
      <div>
          <AiTwotoneFileExclamation />
          <span className='sta' data-max='400'>0</span>
          <p>Placement</p>
      </div>
      <div>
          <FaUserTie />
          <span className='sta' data-max='400'>0</span>
          <p>User</p>
      </div>   */}
      </div>
      </div>
    // })}
      
  )

}

export default Dashboard;