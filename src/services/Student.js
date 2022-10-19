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
        const result = await axios.get("http://localhost:8064/students");
        setStudents(result.data._embedded.students);
      };

    const deleteStudent = async id => {
        await axios.delete(`http://localhost:8064/students/${id}`);
        loadStudents();
      };
    
    

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
                        <button className ="deleteButton" onClick={()=>deleteStudent(55)}>Update</button>
                        <button className ="deleteButton" onClick={()=>deleteStudent(55)}>Delete</button>
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