import React from 'react';

import { FaBars, FaUserAlt, FaCertificate, FaUserTie, FaUser, FaUniversity } from "react-icons/fa";
import { AiTwotoneFileExclamation } from "react-icons/ai";
import { ImBook } from "react-icons/im";
import { RiAdminFill } from "react-icons/ri";
const Dashboard = () => {
  return (
    <div className="dashboardContainer">
      <h1>We've completed</h1>
      <div className='stats'>

        <div>
          <FaUserAlt  />
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
      </div>  
      </div>
      </div>

      
  )
}

export default Dashboard;