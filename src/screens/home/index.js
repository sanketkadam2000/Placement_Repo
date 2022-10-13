import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "https://www.iiswbm.edu/wp-content/themes/iiswbm/images/placement_banner.jpg" },
    { url: "https://res.cloudinary.com/pretto-fr/image/upload/q_auto,ar_16:9,c_fill/website/highlight/placement-achat-immobilier" },
    { url: "https://img.freepik.com/free-photo/man-handshaking-his-employer-after-being-accepted-his-new-office-job_23-2149034565.jpg?w=2000" },
  ];
const header = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }


const Home = () => {

    const [companies,setCompanies]=useState([]);    

    // const getPlacements=async()=>{
    //     const response = await fetch('/placements',{
    //         method:"GET",
    //         // header:{
    //         // 'Content-Type':"application/json"
    //         // }
    //     });
    //     // const data = await response.json();
    //     console.log(response);
    // }

    useEffect(()=>{
        axios.get('http://localhost:8063/placements').then(response=>{   
        setCompanies(response?.data?._embedded?.placements)
        }).catch(error=>{
            console.log(error)
        })
        
        // getPlacements();
    },[])

    

    const deleteCompany=(id)=>{
        axios.delete(`http://localhost:8063/placements/${id}`).then(response=>{
            console.log(response)
        }).catch(error=>{
            console.log(error)
        })
    }

    {console.log(companies,"from api data")}
    return (
        
        <div className="banner">
       <SimpleImageSlider
        width="100%"
        height="100%"
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
       <Navbar/>
              
                {/*<p>Placement management software allows to plan placements, train the students as per relevant market requirements, organize recruitment 
                    drives and let companies recruit students. How is Training and Placement software helpful for higher education institutions?The placement management system creates databases of students, and companies can use these to access details of students who qualify the company’s criteria.
                    Features of Placement Management software Placements Registration
                    Students can register for placements online without help from the college placement management team each time they need to do so. The relevant details and documents can all be turned in online.
                    Process of Placement Management software
                    The process is relatively simple.
                    <p>The purpose of the project "WEB BASED PLACEMENT MANAGEMENT SYSTEM USING CERTIFICATE AUTHENTICATOR", the manual work makes the process slow and other problems such as inconsistency and ambiguity on operations. In order to avoid this web-based placement managed system is proposed, where the student information in the college with regard to placement is managed efficiently. It intends to help fast in fast access procedures in placement related activities and ensures to maintain the details of the student. Students logging should be able to upload their personal and educational information. The key feature of this project is that it is one-time registration enabled. The placement cell calls the companies to select their students for jobs via the campus interview. The placement cell allows the companies to view the student resumes in selective manner. They can filter the students' profile as per their requirement. The job details of the placed students will be provided by the administrator. */}
 
{/* Type here to search

how X

Brow

New X

Snp Share

26°C</p>
                    */}
                    
                    {/* <div>
                        Step 1: The students must first register themselves through the training and placement portal.
                    </div>
                    <div>
                        Step 2: Second, the students must update all relevant details.
                    </div>

                    <div>
                        Step 3: Now, the students can apply for interviews.
                    </div>
                    <div>
                        Step 4: All updates related to recruitment drives, placement schedules, interview timings will be visible on the student’s dashboard.
                    </div> */}
                    {/* </p> */}
                    
        </div>
    )
}


export default Home;