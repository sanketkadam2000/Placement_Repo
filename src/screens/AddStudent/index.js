import React, { useEffect, useState } from 'react';
import "./AddStudent.css";
import {FaUserAlt,FaUniversity} from 'react-icons/fa';
import {MdEmail,MdLocalPhone} from 'react-icons/md';
import {GiBookCover} from 'react-icons/gi';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
const colleges=[{name:"SIOM",
    value:"siom"
},{
    name:"APCOER",
    value:"apcoer"
}];

const courses=[{name:"BE", value:"be"},{name:"MCA", value:"mca"}]

export default function AddStudent() {

    const {state}=useLocation();
     
    const [selectedCourse,setSelectedCourse]=useState();
    const [selectedCollge, setSelectedCollge]=useState(null);
    const [ studentId,setStudentId]=useState(state?.student?.student_id ? state?.student?.student_id : 0);
    const [firstName, setFirstName]=useState(state?.student?.student_first_name? state?.student?.student_first_name:"");
    const [lastName, setLastName]=useState(state?.student?.student_last_name? state?.student?.student_last_name:"");
    const [email, setEmail]=useState(state?.student?.student_email?state?.student?.student_email:"");
    const [phoneNumber, setPhoneNumber]=useState(state?.student?.student_phone_no?state?.student?.student_phone_no:"");
    
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/Dashboard/Student`; 
      navigate(path);
    }

    useEffect(()=>{
        console.log(state,"from add student data ")
        console.log(firstName,lastName,email,phoneNumber,"from add student table")
        console.log(selectedCollge,selectedCourse);
},[])

const addStudent=()=>{
    console.log("add student called.")
    const body={
        student_first_name:firstName,
        student_last_name:lastName,
        student_email:email,
        student_phone_no:phoneNumber,
        student_college_id:1,
        student_course_id:1
    }
    axios.post("http://localhost:8080/students",body).then(response=>{
        console.log(response,"from add student coimponent")
    });
}

const updateStudent=()=>{
    const body={
        student_id:studentId,
        student_first_name:firstName,
        student_last_name:lastName,
        student_email:email,
        student_phone_no:phoneNumber,
        student_college_id:1,
        student_course_id:1
    }
    axios.put(`http://localhost:8080/students/${studentId}`,body).then(response=>{
        console.log(response,"from add student coimponent")
    });
}

  return (
    
        <div className='studentContainer'>
            <div className='subContainer'>
                <div>
                    <h1> Student Record</h1>
                </div>
                <div className="inputContainer">
                <FaUserAlt size={20} color="#6eabc3"/>
                    <input type="text" placeholder="First Name" value={firstName} className='name' onChange={(event)=>setFirstName(event.target.value)} />
                </div>
                <div className="inputContainer">
                <FaUserAlt size={20} color="#6eabc3"/>
                    <input type="text" placeholder="Last Name" value={lastName} className="name" onChange={(event)=>setLastName(event.target.value)}/>
                </div>
                <div className="inputContainer">
                <MdEmail size={20} color="#6eabc3"/>
                    <input type="text" placeholder="Email Id" value={email} className="name" onChange={(event)=>setEmail(event.target.value)}/>
                </div>
                <div className="inputContainer">
                <MdLocalPhone size={20} color="#6eabc3"/>
                    <input type="text" placeholder="Phone No." value={phoneNumber} className="name" onChange={(event)=>setPhoneNumber(event.target.value)}/>
                </div>
                <div className="inputContainer">
                <FaUniversity size={20} color="#6eabc3"/>
                    <select className='collegeDropdown' onChange={(event)=>setSelectedCollge(event.target.value)}>
                        <option value={null}>Please select your college</option>
                        {colleges.map(college=>{
                            return <option value={college.value}>{college.name}</option>
                        })}
                    </select>
                </div>
                <div className="inputContainer">
                <GiBookCover size={20} color="#6eabc3"/>
                    <select className='courseDropdown' onChange={(event)=>setSelectedCourse(event.target.value)}>
                        <option value={null}>Please select your course</option>
                        {courses.map(course=>{
                            return <option value={course.value}>{course.name}</option>
                        })}
                    </select>
                </div>
                <div className="buttonSectionTdDiv">
                
                        {studentId>0?<button className="submit-button" onClick={()=>updateStudent()}>Update</button>
                        : <button className="submit-button" onClick={()=>addStudent()}>Submit</button>}
    
                        <button className="submit-button"  onClick={()=>routeChange()}>Back</button>
                </div>
            </div>
        </div>
  )
}


