import React, { useEffect, useState } from 'react';
import "./AddAdmin.css";
import {FaUserAlt} from 'react-icons/fa';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';


export default function AddAdmin() {

    const {state}=useLocation();
    const [ adminId,setAdminId]=useState(state?.admin?.admin_id ? state?.admin?.admin_id: 0);
    const [Name, setName]=useState(state?.admin?.admin_name? state?.admin?.admin_name:"");
    const [Password, setPassword]=useState(state?.admin?.admin_password? state?.admin?.admin_password:"");
    
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/Dashboard/Admin`; 
      navigate(path);
    }

    useEffect(()=>{
        console.log(state,"from add admin data ")
        console.log(Name,Password,"from add  admin table")
       
},[])

const addAdmin=()=>{
    console.log("add admin called.")
    const body={
        admin_name:Name,
        admin_password:Password,
    }
    axios.post("http://localhost:8080/admins",body).then(response=>{
        console.log(response,"from add admin coimponent")
        alert("Admin added successfully...");
    });
}

const updateAdmin=()=>{
    const body={
        admin_id:adminId,
        admin_name:Name,
        admin_password:Password,
    }
    axios.put(`http://localhost:8080/admins/${adminId}`,body).then(response=>{
        console.log(response,"from add admin coimponent")
        alert("Admin updated successfully...");
    });
}

  return (
    
        <div className='adminContainer'>
            <div className='adminSubContainer'>
                <div>
                    <h1> Admin Record</h1>
                </div>
                <div className="inputContainer">
                <FaUserAlt size={20} color="#6eabc3"/>
                    <input type="text" placeholder=" Name" value={Name} className='name' onChange={(event)=>setName(event.target.value)} />
                </div>
                <div className="inputContainer">
                <FaUserAlt size={20} color="#6eabc3"/>
                    <input type="text" placeholder="Password" value={Password} className='name' onChange={(event)=>setPassword(event.target.value)} />
                </div>
                
                <div className="buttonSectionTdDiv">
                
                        {adminId>0?<button className="submit-button" onClick={()=>updateAdmin()}>Update</button>
                        : <button className="submit-button" onClick={()=>addAdmin()}>Submit</button>}
    
                        <button className="submit-button"  onClick={()=>routeChange()}>Back</button>
                </div>
            </div>
        </div>
  )
}


