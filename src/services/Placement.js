import axios from "axios";
import React, { useEffect, useState } from "react";

const header = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }

const Placement = () => {

    const [companies,setCompanies]=useState([]);   


    useEffect(()=>{
        getPlacements();
    },[])

    const getPlacements=()=>{
        axios.get('http://localhost:8080/placements').then(response=>{   
        console.log(response,"console from get placement method")
         setCompanies(response?.data)
        }).catch(error=>{
            console.log(error)
        })
    }

    const deletePlacements=(id)=>{
        axios.delete(`http://localhost:8080/placements/${id}`,{mode:"cors"}).then(response=>{
            console.log(response,"from delete placements")
            getPlacements()
        }).catch(error=>{
            console.log(error)
        })
    
      }
    {console.log(companies,"from api data")}
    return (
        <div className="dataContainer">
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
                        companies.map((companies,index)=>{
                            return(
                        <tr>
                        <td>
                            {companies.placemnet_id}
                        </td>
                        <td>
                            {companies.placement_name}
                        </td>
                        <td>
                            {companies.qualification}
                        </td>
                        <td>
                            {companies.localDate}
                        </td>
                        <td>
                        <div className="buttonSectionTdDiv">
                        <button className ="deleteButton" onClick={()=>deletePlacements(55)}>Update</button>
                        <button className ="deleteButton" onClick={()=>deletePlacements(55)}>Delete</button>
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