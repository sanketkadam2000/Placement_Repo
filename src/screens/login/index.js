import React from "react";
import { Link } from "react-router-dom";
import profile from "../../img/user.jpg";
import "./Login.css";
import {FaLock, FaUserAlt} from 'react-icons/fa';


function Login() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
		 {/* <h1>Login</h1> */}
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
			 <FaLock size={20} color="#6eabc3"/>
             <input type="password" placeholder="Password" className="name"/>
            </div>
          	<div className="login-button">
          		<button>Login</button>
          	</div>
           
            <p className="link">
			<Link to="/" className="link">Forgot password ?</Link> Or <Link to="/" className="link">Sign Up</Link>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default Login;

