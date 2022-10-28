import axios from "axios";
import React, { useEffect, useState } from "react";

const header = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }

const College = () => {

    const [colleges,setColleges]=useState([]);   


    useEffect(()=>{
        getColleges();
    },[])

    const getColleges=()=>{
        axios.get('http://localhost:8080/colleges').then(response=>{   
        console.log(response,"console from get colleges method")
         setColleges(response?.data)
        }).catch(error=>{
            console.log(error)
        })
    }

    const deleteColleges=(id)=>{
        axios.delete(`http://localhost:8080/colleges/${id}`,{mode:"cors"}).then(response=>{
            console.log(response,"from delete admins")
            getColleges()
        }).catch(error=>{
            console.log(error)
        })
    
      }
    {console.log(colleges,"from api data")}
    return (
        <div className="dataContainer">
        <table>
                    <tr>
                        <td>
                            Id
                        </td>
                        <td>
                            College Name
                        </td>
                        <td>
                           Location
                        </td>
                       
                        <td>
                            
                        </td>
                    </tr>
                    {
                        colleges.map((college,index)=>{
                            return(
                        <tr>
                        <td>
                            {college.college_id}
                        </td>
                        <td>
                            {college.college_name}
                        </td>
                        <td>
                            {college.location}
                        </td>
                        <td>
                        <div className="buttonSectionTdDiv">
                        <button className ="deleteButton" onClick={()=>deleteColleges(college.college_id)}>Update</button>
                        <button className ="deleteButton" onClick={()=>deleteColleges(college.college_id)}>Delete</button>
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
                

    export default College;