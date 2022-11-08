import axios from "axios";
import React, { useEffect, useState } from "react";
import {IoMdPersonAdd} from 'react-icons/io';
import { useNavigate } from "react-router-dom";

const header = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }

  const Course = () => {
    const navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/Dashboard/AddCourse`; 
      navigate(path);
    }


    const updateCourse=(data)=>{
        navigate('/Dashboard/AddCourse', { state: { course:data } });
    }   


    const [courses,setCourses]=useState([]);   


    useEffect(()=>{
        getCourses();
    },[])

    const getCourses=()=>{
        axios.get('http://localhost:8080/courses').then(response=>{   
        console.log(response,"console from get courses method")
         setCourses(response?.data)
        }).catch(error=>{
            console.log(error)
        })
    }

    const deleteCourses=(id)=>{
        axios.delete(`http://localhost:8080/courses/${id}`,{mode:"cors"}).then(response=>{
            console.log(response,"from delete courses")
            alert("Course deleted successfully...");
            getCourses()
        }).catch(error=>{
            console.log(error)
        })
    
      }

    {console.log(courses,"from api data")}
    return (
        <div className="dataContainer">
             <button className="button" onClick={routeChange}> <IoMdPersonAdd size={20} color="white" />Add Course</button>
        <table>
                    <tr>
                        <td>
                            Id
                        </td>
                        <td>
                            Course Name
                        </td>
                       
                        <td>

                        </td>

                    </tr>
                    {
                    courses.map((course,index)=>{
                            return(
                        <tr>
                        <td>
                            {course.course_id}
                        </td>
                        <td>
                            {course.course_name}
                        </td>
                        <td>
                        <div className="buttonSectionTdDiv">
                        <button className ="deleteButton" onClick={()=>updateCourse(course)}>Update</button>
                        <button className ="deleteButton" onClick={()=>deleteCourses(course.course_id)}>Delete</button>
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
                

    export default Course;