import React from "react";
import "./contact.css";
import {FaLock, FaUserAlt} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {RiMessage2Fill} from 'react-icons/ri';

function Contact() {
  return (
    <div className="contactContainer">
     <div className="contactSubContainer">
     <h1> Contact Us</h1>
      <div className="formContainer1">
      <div
        className="leftSide"
        // style={{ backgroundImage: `url(${headerr})` }}
      >
        {/* <img src={headerr} style={{dispaly:"flex",flex:1,}}/> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.8442770218603!2d73.84122971472024!3d18.49071158742637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0070ebbe9fb%3A0x5542022087677a78!2sAnantrao%20Pawar%20College%20Of%20Engineering%20%26%20Research!5e0!3m2!1sen!2sin!4v1665661217514!5m2!1sen!2sin" width="100%" height="90%" style={{border:0}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="rightSide">
        <form className="rightSide" id="contact-form" method="POST">
          
        <div className="inputContainer">
        <FaUserAlt size={20} color="#6eabc3" align/>
			 <input type="text" placeholder="Username" className="name"/>
            </div>
            <div className="inputContainer">
             <MdEmail size={20} color="#6eabc3"/>
			 <input type="email" placeholder="Email" className="name"/>
            </div>
            <div className="inputContainer">
			        <FaLock size={20} color="#6eabc3"/>
        <input type="password" placeholder="Password" className="name"/>
            </div>
            <div className="inputContainer">
			        <RiMessage2Fill size={20} color="#6eabc3"/>
        <input type="message" placeholder="Message" className="name"/>
            </div>
            <div className="submit-button">
          <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Contact;