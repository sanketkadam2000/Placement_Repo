import React from "react";
import { Link } from "react-router-dom";
import profile from "../../img/user.jpg";
import email from "../../img/user.jpg";
import pass from "../../img/user.jpg";
import "./Registartion.css";
import {FaLock, FaUserAlt} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';

function Registartion() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>
           </div>
         </div>
         <div className="formContainer">
           
            <div className="inputContainer">
             <FaUserAlt size={20} color="#6eabc3"/>
			 <input type="text" placeholder="Username" className="name"/>
            </div>
            <div className="inputContainer">
             <MdEmail size={20} color="#6eabc3"/>
			 <input type="email" placeholder="Email" className="name"/>
            </div>
            <div className="inputContainer">
			 <FaLock size={20} color="#6eabc3"/>
             <input type="password" placeholder="Password" className="name"/>
            </div>
          	<div className="registartion-button">
          		<button>Registartion</button>
          	</div>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default Registartion;

