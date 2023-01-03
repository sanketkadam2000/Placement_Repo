import Navbar from "../../components/Navbar";
import SimpleImageSlider from "react-simple-image-slider";
import {FaLock, FaUserAlt} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {RiMessage2Fill} from 'react-icons/ri';
import "./home.css";



const images = [
    { url: "https://www.iiswbm.edu/wp-content/themes/iiswbm/images/placement_banner.jpg" },
    { url: "https://res.cloudinary.com/pretto-fr/image/upload/q_auto,ar_16:9,c_fill/website/highlight/placement-achat-immobilier" },
    { url: "https://img.freepik.com/free-photo/man-handshaking-his-employer-after-being-accepted-his-new-office-job_23-2149034565.jpg?w=2000" },
  ];



const Home = () => {
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
       

       <section className = "customers">
            <div className = "sec-width">
                <div className = "title">
                    <h2>Team Members</h2>
                </div>
                <div className = "customers-container">
                    
                    <div className = "customer">
                        <img  src = "https://media-exp1.licdn.com/dms/image/C4D03AQEtTHcJxrVOEQ/profile-displayphoto-shrink_800_800/0/1624002422881?e=1674086400&v=beta&t=WpDykTpIAURXFfUHLUOjkVOWl2bbd0NZIZuk8Xpi-kM"  alt = "Logo" style={{width:60, height:60, borderRadius:30, marginRight:10}}/>
                        <h3>Sanket Subhash Kadam</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat beatae veritatis provident eveniet praesentium veniam cum iusto distinctio esse, vero est autem, eius optio cupiditate?</p>
                        
                       
                    </div>
                
                  
                    <div className = "customer">
                        <img src = "https://media-exp1.licdn.com/dms/image/D5635AQFK9-qVN2C5mA/profile-framedphoto-shrink_800_800/0/1633925325953?e=1669219200&v=beta&t=qnBEWMph-qL1yi1bJXo918ArowWrcQWWma2DF8Xi1Ac" alt = "Logo" style={{width:60, height:60, borderRadius:30, marginRight:10}}/>
                        <h3>Sana Salim Tamboli</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat beatae veritatis provident eveniet praesentium veniam cum iusto distinctio esse, vero est autem, eius optio cupiditate?</p>
                        
                       
                    </div>
                   
                    <div className = "customer">
                        <img src = "https://scontent.fpnq17-1.fna.fbcdn.net/v/t39.30808-6/271611031_106113141961938_7949655139616278166_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8XsyzMEteLIAX9_93ah&_nc_ht=scontent.fpnq17-1.fna&oh=00_AfB5VSuEAPzacmkQ_jPGnDdNUHc0lWcXCG2Xa6R9RXf8HQ&oe=637A84F3" alt = "Logo" style={{width:60, height:60, borderRadius:30, marginRight:10}}/>
                        <h3>Nandita Waghchoure</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat beatae veritatis provident eveniet praesentium veniam cum iusto distinctio esse, vero est autem, eius optio cupiditate?</p>
                        
                       
                    </div>
                    <div className = "customer">
                        <img src = "https://media-exp1.licdn.com/dms/image/C4E03AQGWvioS79tlxQ/profile-displayphoto-shrink_800_800/0/1634966210527?e=1674086400&v=beta&t=UiMpcQouR20UT7XoQgqwrlY18U4pelVJecyS483AscQ" alt = "Logo" style={{width:60, height:60, borderRadius:30, marginRight:10}}/>
                        <h3>Sahil Rajendra Bandal</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat beatae veritatis provident eveniet praesentium veniam cum iusto distinctio esse, vero est autem, eius optio cupiditate?</p>
                        
                       
                    </div>
                    <div className = "customer">
                        <img src = "https://media-exp1.licdn.com/dms/image/C4D03AQER_8nKc-S_4w/profile-displayphoto-shrink_800_800/0/1627617335369?e=1674086400&v=beta&t=WPwq0aawToItn7YdCyKvScQdJTktdg0zm2de6RI9K6o" alt = "Logo" style={{width:60, height:60, borderRadius:30, marginRight:10}}/>
                        <h3>Divya Deshmukh</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat beatae veritatis provident eveniet praesentium veniam cum iusto distinctio esse, vero est autem, eius optio cupiditate?</p>
                        
                       
                    </div>
                    
                </div>
            </div>
        </section>

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
            <div className="Contactsubmit-button">
          <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      </div>
      </div>
    </div>
              
        </div>
    )
}


export default Home;