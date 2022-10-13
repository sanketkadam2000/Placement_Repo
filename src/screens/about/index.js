import React from "react";
import down from "../../img/down.jpg";
import "./About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${down})`,height:"100vh" }}
      >
        <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p style={{textAlign:"justify", textJustify:"inter-word"}}>Placement management software allows to plan placements, train the students as per relevant market requirements, organize recruitment drives and let companies recruit students. How is Training and Placement software helpful for higher education institutions?The placement management system creates databases of students, and companies can use these to access details of students who qualify the company’s criteria. Features of Placement Management software Placements Registration Students can register for placements online without help from the college placement management team each time they need to do so. The relevant details and documents can all be turned in online. Process of Placement Management software The process is relatively simple.
        <br></br><p style={{textAlign:"justify", textJustify:"inter-word"}}>The purpose of the project "WEB BASED PLACEMENT MANAGEMENT SYSTEM USING CERTIFICATE AUTHENTICATOR", the manual work makes the process slow and other problems such as inconsistency and ambiguity on operations. In order to avoid this web-based placement managed system is proposed, where the student information in the college with regard to placement is managed efficiently. It intends to help fast in fast access procedures in placement related activities and ensures to maintain the details of the student. Students logging should be able to upload their personal and educational information. The key feature of this project is that it is one-time registration enabled. The placement cell calls the companies to select their students for jobs via the campus interview. The placement cell allows the companies to view the student resumes in selective manner. They can filter the student's profile as per their requirement. The job details of the placed students will be provided by the administrator.</p>
        </p>
      </div>
      </div>
      
    </div>
  );
}

export default About;