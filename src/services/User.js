import axios from "axios";
import React, { useEffect, useState } from "react";
import {IoMdPersonAdd} from 'react-icons/io';
import { useNavigate } from "react-router-dom";
const header = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }


  const User = () => {
    const navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/AddUser`; 
      navigate(path);
    }


    const updateUser=(data)=>{
        navigate('/AddUser', { state: { user:data } });
    }  

    const [users,setUsers]=useState([]);   


    useEffect(()=>{
        getUsers();
    },[])

    const getUsers=()=>{
        axios.get('http://localhost:8080/users').then(response=>{   
        console.log(response,"from get call");
        setUsers(response?.data)
        }).catch(error=>{
            console.log(error)
        })
    }
    
    const deleteUsers=(id)=>{
        axios.delete(`http://localhost:8080/users/${id}`).then(response=>{
            console.log(response,"from delete users")
            getUsers()
        }).catch(error=>{
            console.log(error)
        })
    
    }

    {console.log(users,"from api data")}
    return (
        <div className="dataContainer">
            <button className="button" onClick={routeChange}> <IoMdPersonAdd size={20} color="white" />Add User</button>
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
                            {user.user_id}
                        </td>
                        <td>
                            {user.user_name}
                        </td>
                        <td>
                            {user.user_password}
                        </td>
                        <td>
                            {user.user_type}
                        </td>
                        <td>
                        <div className="buttonSectionTdDiv">
                        <button className ="deleteButton" onClick={()=>updateUser(user)}>Update</button>
                        <button className ="deleteButton" onClick={()=>deleteUsers(user.user_id)}>Delete</button> 
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