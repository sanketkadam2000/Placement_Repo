import React, { useEffect, useState } from 'react';
import "./AddCourse.css";
import {FaUserAlt} from 'react-icons/fa';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';


export default function AddCourse() {

    const {state}=useLocation();
    const [ courseId,setCourseId]=useState(state?.course?.course_id ? state?.course?.course_id: 0);
    const [Name, setName]=useState(state?.course?.course_name? state?.course?.course_name:"");
    
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/Course`; 
      navigate(path);
    }

    useEffect(()=>{
        console.log(state,"from add course data ")
        console.log(Name,"from add course table")
       
},[])

const addCourse=()=>{
    console.log("add course called.")
    const body={
        course_name:Name,
        
    }
    axios.post("http://localhost:8080/courses",body).then(response=>{
        console.log(response,"from add course coimponent")
    });
}

const updateCourse=()=>{
    const body={
        course_id:courseId,
        course_name:Name,
        
    }
    axios.put(`http://localhost:8080/courses/${courseId}`,body).then(response=>{
        console.log(response,"from add course coimponent")
    });
}

  return (
    
        <div className='courseContainer'>
            <div className='courseSubContainer'>
                <div>
                    <h1> Course Record</h1>
                </div>
                <div className="inputContainer">
                <FaUserAlt size={20} color="#6eabc3"/>
                    <input type="text" placeholder=" Name" value={Name} className='name' onChange={(event)=>setName(event.target.value)} />
                </div>
                
                
                <div className="buttonSectionTdDiv">
                
                        {courseId>0?<button className="submit-button" onClick={()=>updateCourse()}>Update</button>
                        : <button className="submit-button" onClick={()=>addCourse()}>Submit</button>}
    
                        <button className="submit-button"  onClick={()=>routeChange()}>Back</button>
                </div>
            </div>
        </div>
  )
}


