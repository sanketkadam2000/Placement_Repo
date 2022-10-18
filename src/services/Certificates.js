import axios from "axios";
import React, { useEffect, useState } from "react";

const header = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }

const Certificate = () => {

    const [certificates,setCertificates]=useState([]);   


    useEffect(()=>{
        axios.get('http://localhost:8064/certificates').then(response=>{   
        setCertificates(response?.data?._embedded?.certificates)
        }).catch(error=>{
            console.log(error)
        })
    },[])

    const deletecertificate=(id)=>{
        axios.delete(`http://localhost:8064/certificates/${id}`).then(response=>{
            console.log(response)
        }).catch(error=>{
            console.log(error)
        })
    
    }

    {console.log(Certificate,"from api data")}
    return (
        <div className="dataContainer">
        <table>
                    <tr>
                        <td>
                            Id
                        </td>
                        <td>
                            Year
                        </td>
                        <td>

                        </td>
                    </tr>
                    {
                        certificates.map((certificate,index)=>{
                            return(
                        <tr>
                        <td>
                            {index+1}
                        </td>
                        <td>
                            {certificate.year}
                        </td>
                        <td>
                        <div className="buttonSectionTdDiv">
                        <button className ="deleteButton" onClick={()=>deletecertificate(55)}>Update</button>
                        <button className ="deleteButton" onClick={()=>deletecertificate(55)}>Delete</button>
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
                

    export default Certificate;