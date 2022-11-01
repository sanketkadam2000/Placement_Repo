import React, { useEffect, useState } from 'react';
import "./AddPlacement.css";
import {FaUserAlt} from 'react-icons/fa';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';


export default function AddPlacement() {

    const {state}=useLocation();
    const [ placementId,setPlacementId]=useState(state?.placement?.placement_id ? state?.placement?.placement_id: 0);
    const [Name, setName]=useState(state?.placement?.placement_name? state?.placement?.placement_name:"");
    const [Qaulification, setQaulification]=useState(state?.placement?.qualification? state?.placement?.qualification:"");
    const [LocalDate, setLocalDate]=useState(state?.placement?.local_date? state?.placement?.local_date:"");
    
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/Placement`; 
      navigate(path);
    }

    useEffect(()=>{
        console.log(state,"from add placement data ")
        console.log(Name,Qaulification,LocalDate,"from add placement table")
       
},[])

const addPlacement=()=>{
    console.log("add placement called.")
    const body={
        placement_name:Name,
        qualification:Qaulification,
        local_date:LocalDate,
    }
    axios.post("http://localhost:8080/placements",body).then(response=>{
        console.log(response,"from add placement coimponent")
    });
}

const updatePlacement=()=>{
    const body={
        placement_id:placementId,
        placement_name:Name,
        qualification:Qaulification,
        local_date:LocalDate,

    }
    axios.put(`http://localhost:8080/placements/${placementId}`,body).then(response=>{
        console.log(response,"from add placement coimponent")
    });
}

  return (
    
        <div className='placementContainer'>
            <div className='placementSubContainer'>
                <div>
                    <h1> Placement Record</h1>
                </div>
                <div className="inputContainer">
                <FaUserAlt size={20} color="#6eabc3"/>
                    <input type="text" placeholder=" Name" value={Name} className='name' onChange={(event)=>setName(event.target.value)} />
                </div>
                <div className="inputContainer">
                <FaUserAlt size={20} color="#6eabc3"/>
                    <input type="text" placeholder="Qaulification" value={Qaulification} className='name' onChange={(event)=>setQaulification(event.target.value)} />
                </div>
                <div className="inputContainer">
                <FaUserAlt size={20} color="#6eabc3"/>
                    <input type="text" placeholder="LocalDate" value={LocalDate} className='name' onChange={(event)=>setLocalDate(event.target.value)} />
                </div>
                
                <div className="buttonSectionTdDiv">
                
                        {placementId>0?<button className="submit-button" onClick={()=>updatePlacement()}>Update</button>
                        : <button className="submit-button" onClick={()=>addPlacement()}>Submit</button>}
    
                        <button className="submit-button"  onClick={()=>routeChange()}>Back</button>
                </div>
            </div>
        </div>
  )
}


