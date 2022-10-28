import axios from "axios";
import React, { useEffect, useState } from "react";

const header = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }

const Admin = () => {

    const [admins,setAdmins]=useState([]);   


    useEffect(()=>{
        getAdmins();
    },[])

    const getAdmins=()=>{
        axios.get('http://localhost:8080/admins').then(response=>{   
        console.log(response,"console from get admins method")
         setAdmins(response?.data)
        }).catch(error=>{
            console.log(error)
        })
    }

    const deleteAdmins=(id)=>{
        axios.delete(`http://localhost:8080/admins/${id}`,{mode:"cors"}).then(response=>{
            console.log(response,"from delete admins")
            getAdmins()
        }).catch(error=>{
            console.log(error)
        })
    
      }

    {console.log(admins,"from api data")}
    return (
        <div className="dataContainer">
        <table>
                    <tr>
                        <td>
                            Id
                        </td>
                        <td>
                            Admin Name
                        </td>
                        <td>
                            Password
                        </td>
                        <td>

                        </td>

                    </tr>
                    {
                    admins.map((admin,index)=>{
                            return(
                        <tr>
                        <td>
                            {admin.admin_id}
                        </td>
                        <td>
                            {admin.admin_name}
                        </td>
                        <td>
                            {admin.admin_password}
                        </td>
                        <td>
                        <div className="buttonSectionTdDiv">
                        <button className ="deleteButton" onClick={()=>deleteAdmins(admin.admin_id)}>Update</button>
                        <button className ="deleteButton" onClick={()=>deleteAdmins(admin.admin_id)}>Delete</button>
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
                

    export default Admin;