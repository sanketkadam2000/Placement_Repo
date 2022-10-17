import axios from "axios";
import React, { useEffect, useState } from "react";
import {IoMdPersonAdd} from 'react-icons/io';

const Student = () => {


    const [students,setStudents]=useState([]);   

    useEffect(()=>{
        axios.get('http://localhost:8064/students').then(response=>{   
        setStudents(response?.data?._embedded?.students)
        }).catch(error=>{
            console.log(error)
        })
    },[])

    const deleteStudent=(id)=>{
        axios.delete(`http://localhost:8064/students/${id}`).then(response=>{
            console.log(response)
        }).catch(error=>{
            console.log(error)
        })
    
    }

    {console.log(students,"from api data")}
    return (
       <div className="dataContainer">

       <button className="button"> <IoMdPersonAdd size={20} color="white" />Add Student</button>
      
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
                    )

}

    export default Student;