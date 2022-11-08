import axios from "axios";
import React, { useEffect, useState } from "react";
import {IoMdPersonAdd} from 'react-icons/io';
import { useNavigate } from "react-router-dom";
const header = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }

  const Placement = () => {
    const navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/Dashboard/AddPlacement`; 
      navigate(path);
    }


    const updatePlacement=(data)=>{
        navigate('/Dashboard/AddPlacement', { state: { placement:data } });
    }   


    const [placements,setPlacements]=useState([]);   


    useEffect(()=>{
        getPlacements();
    },[])

    const getPlacements=()=>{
        axios.get('http://localhost:8080/placements').then(response=>{   
        console.log(response,"console from get placement method")
        setPlacements(response?.data)
        }).catch(error=>{
            console.log(error)
        })
    }

    const deletePlacements=(id)=>{
        axios.delete(`http://localhost:8080/placements/${id}`,{mode:"cors"}).then(response=>{
            console.log(response,"from delete placements")
            alert("Placement deleted successfully...");
            getPlacements()
        }).catch(error=>{
            console.log(error)
        })
    
      }
    {console.log(placements,"from api data")}
    return (
        <div className="dataContainer">
            <button className="button" onClick={routeChange}> <IoMdPersonAdd size={20} color="white" />Add Placement</button>
        <table>
                    <tr>
                        <td>
                            Id
                        </td>
                        <td>
                            Company Name
                        </td>
                        <td>
                            Criteria
                        </td>
                        <td>
                            Schedule Date
                        </td>
                        <td>

                        </td>
                    </tr>
                    {
                        placements.map((placements,index)=>{
                            return(
                        <tr>
                        <td>
                            {placements.placement_id}
                        </td>
                        <td>
                            {placements.placement_name}
                        </td>
                        <td>
                            {placements.qualification}
                        </td>
                        <td>
                            {placements.local_date}
                        </td>
                        <td>
                        <div className="buttonSectionTdDiv">
                        <button className ="deleteButton" onClick={()=>updatePlacement(placements)}>Update</button>
                        <button className ="deleteButton" onClick={()=>deletePlacements(placements.placement_id)}>Delete</button>
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
                    
                
                

    export default Placement;