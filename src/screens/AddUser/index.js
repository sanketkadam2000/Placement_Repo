import React, { useEffect, useState } from 'react';
import "./AddUser.css";
import {FaUserAlt} from 'react-icons/fa';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';


export default function AddUser() {

    const {state}=useLocation();
    const [ userId,setUserId]=useState(state?.user?.user_id ? state?.user?.user_id: 0);
    const [Name, setName]=useState(state?.user?.user_name? state?.user?.user_name:"");
    const [Password, setPassword]=useState(state?.user?.user_password? state?.user?.user_password:"");
    const [Type, setType]=useState(state?.user?.user_type? state?.user?.user_type:"");
    
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/Dashboard/User`; 
      navigate(path);
    }

    useEffect(()=>{
        console.log(state,"from add user data ")
        console.log(Name,Password,Type,"from add user table")
       
},[])

const addUser=()=>{
    console.log("add user called.")
    const body={
        user_name:Name,
        user_password:Password,
        user_type:Type,
    }
    axios.post("http://localhost:8080/users",body).then(response=>{
        console.log(response,"from add user coimponent")
    });
}

const updateUser=()=>{
    const body={
        user_id:userId,
        user_name:Name,
        user_password:Password,
        user_type:Type,
    }
    axios.put(`http://localhost:8080/users/${userId}`,body).then(response=>{
        console.log(response,"from add user coimponent")
    });
}

  return (
    
        <div className='userContainer'>
            <div className='userSubContainer'>
                <div>
                    <h1> User Record</h1>
                </div>
                <div className="inputContainer">
                <FaUserAlt size={20} color="#6eabc3"/>
                    <input type="text" placeholder=" Name" value={Name} className='name' onChange={(event)=>setName(event.target.value)} />
                </div>
                <div className="inputContainer">
                <FaUserAlt size={20} color="#6eabc3"/>
                    <input type="text" placeholder="Password" value={Password} className='name' onChange={(event)=>setPassword(event.target.value)} />
                </div>
                <div className="inputContainer">
                <FaUserAlt size={20} color="#6eabc3"/>
                    <input type="text" placeholder="Type" value={Type} className='name' onChange={(event)=>setType(event.target.value)} />
                </div>
                
                <div className="buttonSectionTdDiv">
                
                        {userId>0?<button className="submit-button" onClick={()=>updateUser()}>Update</button>
                        : <button className="submit-button" onClick={()=>addUser()}>Submit</button>}
    
                        <button className="submit-button"  onClick={()=>routeChange()}>Back</button>
                </div>
            </div>
        </div>
  )
}


