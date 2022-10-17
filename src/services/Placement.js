import axios from "axios";
import React, { useEffect, useState } from "react";

const header = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }

const Placement = () => {

    const [companies,setCompanies]=useState([]);   


    useEffect(()=>{
        axios.get('http://localhost:8064/placements').then(response=>{   
        setCompanies(response?.data?._embedded?.placements)
        }).catch(error=>{
            console.log(error)
        })
    },[])

    const deletecompanies=(id)=>{
        axios.delete(`http://localhost:8064/placements/${id}`).then(response=>{
            console.log(response)
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
                    </tr>
                    {
                        companies.map((companies,index)=>{
                            return(
                        <tr>
                        <td>
                            {index+1}
                        </td>
                        <td>
                            {companies.placementname}
                        </td>
                        <td>
                            {companies.qualification}
                        </td>
                        <td>
                            {companies.localDate}
                        </td>
                        <td>
                            <input className ="deleteButton" type="Submit" title="Delete" name="Delete" onClick={()=>deletecompanies(55)}/>
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