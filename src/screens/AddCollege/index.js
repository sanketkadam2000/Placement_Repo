import React, { useEffect, useState } from 'react';
import "./AddCollege.css";
import {FaUserAlt} from 'react-icons/fa';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';


export default function AddCollege() {

    const {state}=useLocation();
    const [ collegeId,setCollegeId]=useState(state?.college?.college_id ? state?.college?.college_id: 0);
    const [Name, setName]=useState(state?.college?.college_name? state?.college?.college_name:"");
    const [Location, setLocation]=useState(state?.college?.location? state?.college?.location:"");
    
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/College`; 
      navigate(path);
    }

    useEffect(()=>{
        console.log(state,"from add college data ")
        console.log(Name,Location,"from add college table")
       
},[])

const addCollege=()=>{
    console.log("add college called.")
    const body={
        college_name:Name,
        location:Location,
    }
    axios.post("http://localhost:8080/colleges",body).then(response=>{
        console.log(response,"from add college coimponent")
    });
}

const updateCollege=()=>{
    const body={
        college_id:collegeId,
        college_name:Name,
        location:Location,
    }
    axios.put(`http://localhost:8080/colleges/${collegeId}`,body).then(response=>{
        console.log(response,"from add college coimponent")
    });
}

  return (
    
        <div className='collegeContainer'>
            <div className='collegeSubContainer'>
                <div>
                    <h1> College Record</h1>
                </div>
                <div className="inputContainer">
                <FaUserAlt size={20} color="#6eabc3"/>
                    <input type="text" placeholder=" Name" value={Name} className='name' onChange={(event)=>setName(event.target.value)} />
                </div>
                <div className="inputContainer">
                <FaUserAlt size={20} color="#6eabc3"/>
                    <input type="text" placeholder="Location" value={Location} className='name' onChange={(event)=>setLocation(event.target.value)} />
                </div>
                
                <div className="buttonSectionTdDiv">
                
                        {collegeId>0?<button className="submit-button" onClick={()=>updateCollege()}>Update</button>
                        : <button className="submit-button" onClick={()=>addCollege()}>Submit</button>}
    
                        <button className="submit-button"  onClick={()=>routeChange()}>Back</button>
                </div>
            </div>
        </div>
  )
}


