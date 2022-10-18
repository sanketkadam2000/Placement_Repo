import axios from "axios";
import React, { useEffect, useState } from "react";

const header = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }

const College = () => {

    const [colleges,setColleges]=useState([]);   


    useEffect(()=>{
        axios.get('http://localhost:8064/colleges').then(response=>{   
        setColleges(response?.data?._embedded?.colleges)
        }).catch(error=>{
            console.log(error)
        })
    },[])

    const deletecollege=(id)=>{
        axios.delete(`http://localhost:8064/colleges/${id}`).then(response=>{
            console.log(response)
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
                            {index+1}
                        </td>
                        <td>
                            {college.college_name}
                        </td>
                        <td>
                            {college.location}
                        </td>
                        <td>
                        <div className="buttonSectionTdDiv">
                        <button className ="deleteButton" onClick={()=>deletecollege(55)}>Update</button>
                        <button className ="deleteButton" onClick={()=>deletecollege(55)}>Delete</button>
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