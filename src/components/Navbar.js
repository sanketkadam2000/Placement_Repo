import React, { useState } from "react";
import { Link } from "react-router-dom";
import colors from "../util/colors";
import routes from "../util/routes";
// import Icon, { FontAwesome, Feather, Ionicons } from 'react-web-vector-icons';

const navbarObject=[
{
  name:"Login",
  toLink:routes.Login
},
{
  name:"Registration",
  toLink:routes.Registration
},
{
  name:"Contact",
  toLink:routes.Contact
},
{
  name:"About",
  toLink:routes.About
},
]
const studenNavObject=[
  {
    name:"Registration",
    toLink:routes.Registration
  },
  {
    name:"Contact",
    toLink:routes.Contact
  },
  ]


const adminNavObject=[
  {
    name:"Company",
    toLink:routes.Registration
  },
  {
    name:"Student",
    toLink:routes.Contact
  },
  ]


const Navbar = () => {
  const [rollname,setRollname]=useState("Student");
  return (
    <nav className="navbar">
      <div style={{display:'flex', height:100, backgroundColor:colors.backGroundColor,  flexDirection:'row', justifyContent:"center", alignItems:"center", paddingRight:"1%"}}>
      <div style={{display:'flex', flex:5, justifyContent:"flex-start", alignItems:"center", padding:"1%"}}>
      {/* <Ionicons
    name='md-send'
    color='blue'
    size={20}
        /> */}
        <img src="data:image/jpeg;base64,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" alt="Logo" style={{width:60, height:60, borderRadius:30, marginRight:10}}/>
       <h1 style={{color:colors.white, fontSize:24, fontWeight:"bold"}}>Placement Management System</h1>
       </div>
       <div style={{display:'flex', flex:2, flexDirection:"row", alignSelf:'center'}}>
        { rollname==="student"?studenNavObject.map(item=>{
          return <div style={{padding:'3%', margin:"1%", border:1, borderStyle:"solid", borderColor:colors.white, borderRadius:10}}><Link to={item.toLink} style={{color:colors.white, fontWeight:"bold", textDecoration:'none'}}>{item.name}</Link></div>
        })
        :
        rollname=="admin"? adminNavObject.map(item=>{
          return <div style={{padding:'3%', margin:"1%", border:1, borderStyle:"solid", borderColor:colors.white, borderRadius:10}}><Link to={item.toLink} style={{color:colors.white, fontWeight:"bold", textDecoration:'none'}}>{item.name}</Link></div>
        }) :
        navbarObject.map(item=>{
          return <div style={{padding:'3%', margin:"1%", border:1, borderStyle:"solid", borderColor:colors.white, borderRadius:10}}><Link to={item.toLink} style={{color:colors.white, fontWeight:"bold", textDecoration:'none'}}>{item.name}</Link></div>
        })
        }
       {/* <div style={{margin:'1%'}}><Link to="/Login" style={{color:"white"}}>Login</Link></div>
        <div style={{margin:'1%'}}><Link to="/Registration" style={{color:"white"}}>Registration</Link></div>
        <div style={{margin:'1%'}}><Link to="/Contact" style={{color:"white"}}>Contact</Link></div> 
      <div style={{margin:'1%'}}><Link to="/About" style={{color:"white"}}>About</Link></div>*/}
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
