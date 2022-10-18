import axios from "axios";
import React, { useEffect, useState } from "react";

const header = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }

const User= () => {

    const [users,setUsers]=useState([]);   


    useEffect(()=>{
        axios.get('http://localhost:8064/users').then(response=>{   
        setUsers(response?.data?._embedded?.users)
        }).catch(error=>{
            console.log(error)
        })
    },[])

    const deleteUser=(id)=>{
        axios.delete(`http://localhost:8064/users/${id}`).then(response=>{
            console.log(response)
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
                            {index+1}
                        </td>
                        <td>
                            {user.user_name}
                        </td>
                        <td>
                            {user.userpassword}
                        </td>
                        <td>
                            {user.usertype}
                        </td>
                        <td>
                        <div className="buttonSectionTdDiv">
                        <button className ="deleteButton" onClick={()=>deleteUser(55)}>Update</button>
                        <button className ="deleteButton" onClick={()=>deleteUser(55)}>Delete</button>
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