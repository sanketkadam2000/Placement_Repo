import axios from "axios";
import React, { useEffect, useState } from "react";

const header = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }

const Certificate = () => {

    const [certificates,setCertificates]=useState([]);   


    useEffect(()=>{
        getCertificates();
    },[])

    const getCertificates=()=>{
        axios.get('http://localhost:8080/certificates').then(response=>{   
        console.log(response,"console from get certificates method")
         setCertificates(response?.data)
        }).catch(error=>{
            console.log(error)
        })
    }

    const deleteCertificates=(id)=>{
        axios.delete(`http://localhost:8080/certificates/${id}`,{mode:"cors"}).then(response=>{
            console.log(response,"from delete admins")
            getCertificates()
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
                            {certificate.Certificate_id}
                        </td>
                        <td>
                            {certificate.year}
                        </td>
                        <td>
                        <div className="buttonSectionTdDiv">
                        <button className ="deleteButton" onClick={()=>deleteCertificates()}>Update</button>
                        <button className ="deleteButton" onClick={()=>deleteCertificates()}>Delete</button>
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