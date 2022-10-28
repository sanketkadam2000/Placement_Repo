import axios from "axios";
import React, { useEffect, useState } from "react";


const header = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }

const Course = () => {

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
            getCourses()
        }).catch(error=>{
            console.log(error)
        })
    
      }

    {console.log(courses,"from api data")}
    return (
        <div className="dataContainer">
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
                        <button className ="deleteButton" onClick={()=>deleteCourses(course.course_id)}>Update</button>
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