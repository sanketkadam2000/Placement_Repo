import React, { useEffect, useState } from 'react';
import "./AddStudent.css";
import {FaUserAlt,FaUniversity} from 'react-icons/fa';
import {MdEmail,MdLocalPhone} from 'react-icons/md';
import {GiBookCover} from 'react-icons/gi';
const colleges=[{name:"SIOM",
    value:"siom"
},{
    name:"APCOER",
    value:"apcoer"
}];

const courses=[{name:"BE", value:"be"},{name:"MCA", value:"mca"}]

export default function AddStudent() {
     
    const [selectedCourse,setSelectedCourse]=useState(null);
    const [selectedCollge, setSelectedCollge]=useState(null);

    useEffect(()=>{
        console.log(selectedCollge,selectedCourse);
},[selectedCollge,selectedCourse])

  return (
    
        <div className='studentContainer'>
            <div className='subContainer'>
                <div>
                    <h1> Student Record</h1>
                </div>
                <div className="inputContainer">
                <FaUserAlt size={20} color="#6eabc3"/>
                    <input type="text" placeholder="First Name" className='name' />
                </div>
                <div className="inputContainer">
                <FaUserAlt size={20} color="#6eabc3"/>
                    <input type="text" placeholder="Last Name" className="name"/>
                </div>
                <div className="inputContainer">
                <MdEmail size={20} color="#6eabc3"/>
                    <input type="text" placeholder="Email Id" className="name"/>
                </div>
                <div className="inputContainer">
                <MdLocalPhone size={20} color="#6eabc3"/>
                    <input type="text" placeholder="Phone No." className="name"/>
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
                <div className="submit-button">
                    <button type="submit">Submit</button>
                </div>
            </div>
        </div>
  )
}


