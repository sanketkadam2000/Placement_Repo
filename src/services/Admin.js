import axios from "axios";
import React, { useEffect, useState } from "react";

const header = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }

const Admin = () => {

    const [admins,setAdmins]=useState([]);   


    useEffect(()=>{
        axios.get('http://localhost:8064/admins').then(response=>{   
        setAdmins(response?.data?._embedded?.admins)
        }).catch(error=>{
            console.log(error)
        })
    },[])

    const deleteadmin=(id)=>{
        axios.delete(`http://localhost:8064/admins/${id}`).then(response=>{
            console.log(response)
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

                    </tr>
                    {
                    admins.map((admin,index)=>{
                            return(
                        <tr>
                        <td>
                            {index+1}
                        </td>
                        <td>
                            {admin.adminname}
                        </td>
                        <td>
                            {admin.adminpassword}
                        </td>
                        <td>
                        <input className ="deleteButton" type="Submit" title="Delete" name="Delete" onClick={()=>deleteadmin(55)}/>
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