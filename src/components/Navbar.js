import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div style={{display:'flex', flexDirection:'row', alignItems:"center"}}>
      <div style={{display:'flex', flex:1, backgroundColor:'#00000050', justifyContent:"center", alignItems:"center", padding:"1%"}}>
       <h1 style={{color:"white"}}>Placement Management System</h1>
       </div>
       <div style={{display:'flex', flexDirection:"row",}}>
       <div style={{margin:'1%'}}><Link to="/Login" style={{color:"white"}}>Login</Link></div>
        <div style={{margin:'1%'}}><Link to="/Registration" style={{color:"white"}}>Registration</Link></div>
       </div>
       </div>
      {/* <div className="navbar__text">
        <ul className="navbar__ul">
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Registration">Registration</Link>
          </li>
         
        </ul>
      </div> */}
    </nav>
  );
};

export default Navbar;
