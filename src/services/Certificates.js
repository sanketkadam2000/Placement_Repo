import axios from "axios";
import React, { useEffect, useState } from "react";
import {IoMdPersonAdd} from 'react-icons/io';
import { useNavigate } from "react-router-dom";
const header = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }

  const Certificate = () => {
    const navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/Dashboard/AddCertificate`; 
      navigate(path);
    }


    const updateCertificate=(data)=>{
        navigate('/Dashboard/AddCertificate', { state: { certificate:data } });
    }   


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
            console.log(response,"from delete certificates")
            alert("Certificate deleted successfully...");
            getCertificates()
        }).catch(error=>{
            console.log(error)
        })
    
      }

    {console.log(Certificate,"from api data")}
    return (
        <div className="dataContainer">
            <button className="button" onClick={routeChange}> <IoMdPersonAdd size={20} color="white" />Add Certificate</button>
        <table>
                    <tr>
                        <td>
                            Id
                        </td>
                        <td>
                            Start Date
                        </td>
                        <td>
                            End Date
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
                            {certificate.certificate_id}
                        </td>
                        <td>
                            {certificate.start_date}
                        </td>
                        <td>
                            {certificate.end_date}
                        </td>
                        <td>
                            {certificate.year}
                        </td>
                        <td>
                        <div className="buttonSectionTdDiv">
                        <button className ="deleteButton" onClick={()=>updateCertificate(certificate)}>Update</button>
                        <button className ="deleteButton" onClick={()=>deleteCertificates(certificate.certificate_id)}>Delete</button>
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

   