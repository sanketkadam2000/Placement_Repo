import axios from "axios";
import React, { useEffect, useState } from "react";

const header = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }

const User= () => {

    const [users,setUsers]=useState([]);   


    useEffect(()=>{
        getEmployees();
    },[])

    const getEmployees=()=>{
        axios.get('http://localhost:8080/employees').then(response=>{   
        console.log(response,"from get call");
        setUsers(response?.data)
        }).catch(error=>{
            console.log(error)
        })
    }
    
    const deleteEmployees=(id)=>{
        axios.delete(`http://localhost:8080/employees/${id}`).then(response=>{
            console.log(response,"from delete employees")
            getEmployees()
        }).catch(error=>{
            console.log(error)
        })
    
    }

    {console.log(users,"from api data")}
    return (
        <div className="dataContainer">
        <table>
                    <tr>
                        <td>
                            Id
                        </td>
                        <td>
                            User Name
                        </td>
                        <td>
                            Password
                        </td>
                        <td>
                           Type
                        </td>
                        <td>

                        </td>

                    </tr>
                    {
                    users.map((user,index)=>{
                            return(
                        <tr>
                        <td>
                            {user.id}
                        </td>
                        <td>
                            {user.name}
                        </td>
                        <td>
                            {user.age}
                        </td>
                        <td>
                            {user.salary}
                        </td>
                        <td>
                        <div className="buttonSectionTdDiv">
                        <button className ="deleteButton" onClick={()=>deleteEmployees(user.id)}>Update</button>
                        <button className ="deleteButton" onClick={()=>deleteEmployees(user.id)}>Delete</button> 
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
                

    export default User;