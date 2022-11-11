import React, { useEffect, useState } from 'react';
import "./AddCertificate.css";
import {BsCalendarDateFill} from 'react-icons/bs';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';


export default function AddCertificate() {

    const {state}=useLocation();
    const [ certificateId,setCertificateId]=useState(state?.certificate?.certificate_id ? state?.certificate?.certificate_id: 0);
    const [StartDate, setStartDate]=useState(state?.certificate?.start_date? state?.certificate?.start_date:"");
    const [EndDate, setEndDate]=useState(state?.certificate?.end_date? state?.certificate?.end_date:"");
    const [Year, setYear]=useState(state?.certificate?.year? state?.certificate?.year:"");
    
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/Dashboard/Certificate`; 
      navigate(path);
    }

    useEffect(()=>{
        console.log(state,"from add certificate data ")
        console.log(StartDate,EndDate,Year,"from add certificate table")
       
},[])

const addCertificate=()=>{
    console.log("add certificate called.")
    const body={
        start_date:StartDate,
        end_date:EndDate,
        year:Year
    }
    axios.post("http://localhost:8080/certificates",body).then(response=>{
        console.log(response,"from add certificate coimponent")
        alert("Certificate added successfully...");
    });
}

const updateCertificate=()=>{
    const body={
        certificate_id:certificateId,
        start_date:StartDate,
        end_date:EndDate,
        year:Year
    }
    axios.put(`http://localhost:8080/certificates/${certificateId}`,body).then(response=>{
        console.log(response,"from addcertificate coimponent")
        alert("Certificate updated successfully...");
    });
}

  return (
    
        <div className='certificateContainer'>
            <div className='certificateSubContainer'>
                <div>
                    <h1> certificate Record</h1>
                </div>
                <div className="inputContainer">
                <BsCalendarDateFill size={20} color="#6eabc3"/>
                    <input type="text" placeholder=" Start Date" value={StartDate} className='name' onChange={(event)=>setStartDate(event.target.value)} />
                </div>
                <div className="inputContainer">
                <BsCalendarDateFill size={20} color="#6eabc3"/>
                    <input type="text" placeholder="End Date" value={EndDate} className='name' onChange={(event)=>setEndDate(event.target.value)} />
                </div>
                <div className="inputContainer">
                <BsCalendarDateFill size={20} color="#6eabc3"/>
                    <input type="text" placeholder="Year" value={Year} className='name' onChange={(event)=>setYear(event.target.value)} />
                </div>
                
                <div className="buttonSectionTdDiv">
                
                        {certificateId>0?<button className="submit-button" onClick={()=>updateCertificate()}>Update</button>
                        : <button className="submit-button" onClick={()=>addCertificate()}>Submit</button>}
    
                        <button className="submit-button"  onClick={()=>routeChange()}>Back</button>
                </div>
            </div>
        </div>
  )
}


