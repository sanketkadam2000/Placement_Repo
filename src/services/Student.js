import axios from "axios";
import React, { useEffect, useState } from "react";
import {IoMdPersonAdd} from 'react-icons/io';
import { useNavigate } from "react-router-dom";

const Student = () => {
    const navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/AddStudent`; 
      navigate(path);
    }

    const updateStudent=(data)=>{
        navigate('/AddStudent', { state: { student:data } });
    }


    const [students,setStudents]=useState([]);   

    useEffect(()=>{
        getStudents();
    },[])

    const getStudents=()=>{
        axios.get('http://localhost:8080/students').then(response=>{   
        console.log(response,"console from get student method")
         setStudents(response?.data)
        }).catch(error=>{
            console.log(error)
        })
    }

    const deleteStudents=(id)=>{
        axios.delete(`http://localhost:8080/students/${id}`,{mode:"cors"}).then(response=>{
            console.log(response,"from delete students")
            getStudents()
        }).catch(error=>{
            console.log(error)
        })
    
      }

    // const deleteStudent=async id=>{
    //     const response=await fetch(`/student/students/${id}`,{
    //         method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    //         mode: 'cors', // no-cors, *cors, same-origin
    //         // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //         // credentials: 'same-origin', // include, *same-origin, omit
    //         headers: {
    //           'Content-Type': 'application/json'
    //           // 'Content-Type': 'application/x-www-form-urlencoded',
    //         }});

    //         console.log(response.json(),"from delete student")
        
    // }
    
      

    {console.log(students,"from api data")}
    return (
       <div className="dataContainer">

       <button className="button" onClick={routeChange}> <IoMdPersonAdd size={20} color="white" />Add Student</button>
      
       <table>
                    <tr>
                    <td>
                           Id
                        </td>
                        <td>
                            Name
                        </td>
                        <td>
                            Email
                        </td>
                        
                        <td>
                           Contact No
                        </td>
                        <td>
                            College Id
                        </td>
                        <td>
                           Course Id
                        </td>
                        <td>

                        </td>
                    </tr>
                    {
                        students.map((student,index)=>{
                            console.log(student,"from student table data")
                            return(
                        <tr>
                        <td>
                            {student.student_id}
                        </td>
                        <td>
                            {student.student_first_name+" "+student.student_last_name}
                        </td>
                        <td>
                            {student.student_email}
                        </td>
                        <td>
                            {student.student_phone_no}
                        </td>
                        <td>
                            {student.student_college_id}
                        </td>
                        <td>
                            {student.student_course_id}
                        </td>
                        <td>
                            <div className="buttonSectionTdDiv">
                        <button className ="deleteButton" onClick={()=>updateStudent(student)}>Update</button>
                        <button className ="deleteButton" onClick={()=>deleteStudents(student.student_id)}>Delete</button>
                        </div>
                        </td>
                        
                    </tr>
                            )
                        })
                    }
                </table> 
                </div>
    );
                };



    export default Student;