import axios from "axios";
import React, { useEffect, useState } from "react";
import {IoMdPersonAdd} from 'react-icons/io';
import { useNavigate } from "react-router-dom";

const Student = () => {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/AddStudent`; 
      navigate(path);
    }


    const [students,setStudents]=useState([]);   

    useEffect(() => {
        loadStudents();
      }, []);
    
      const loadStudents = async () => {
        const result = await axios.get("http://localhost:8065/students");
        setStudents(result.data._embedded.students);
      };

    const deleteStudent = async id => {
        await axios.delete(`http://localhost:8065/students/${id}`);
        loadStudents();
      };

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
                           RollNo.
                        </td>
                        <td>
                            Hallticketno.
                        </td>
                        <td>
                            Name
                        </td>
                        <td>
                           Course
                        </td>
                        <td>
                            Criteria
                        </td>
                        <td>
                            Year
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
                            {index+1}
                        </td>
                        <td>
                            {student.student_roll}
                        </td>
                        <td>
                            {student.student_hallticketno}
                        </td>
                        <td>
                            {student.student_name}
                        </td>
                        <td>
                            {student.student_course}
                        </td>
                        <td>
                            {student.studentquali}
                        </td>
                        <td>
                            {student.studentyear}
                        </td>
                        <td>
                            <div className="buttonSectionTdDiv">
                        <button className ="deleteButton" onClick={()=>deleteStudent(33)}>Update</button>
                        <button className ="deleteButton" onClick={()=>deleteStudent(33)}>Delete</button>
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