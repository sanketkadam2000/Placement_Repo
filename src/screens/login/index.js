import React, { Component } from 'react'
import { Link } from "react-router-dom";
import profile from "../../img/user.jpg";
import "./Login.css";
import {FaLock, FaUserAlt} from 'react-icons/fa';


export default class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }

    componentDidMount(){
        console.log("Component Rendered")
    }

    componentDidUpdate(){
        console.log(this.state.username,this.state.password,"from component did update")
    }

    login=()=>{
        const{username, password}=this.state;
        console.log(username,password, "from login method")
      }

    onChangeText=(key,value)=>{
        console.log(key,value, "from on change text method")
        this.setState({[key]:value})
      }

  render() {
    return (
        <div className="main">
        <div className="sub-main">
          <div>
            <div className="imgs">
            {/* <h1>Login</h1> */}
              <div className="container-image">
                <img src={profile} alt="profile" className="profile"/>
              </div>
            </div>
            <div className="formContainer">
              
               <div className="inputContainer">
                <FaUserAlt size={20} color="#6eabc3"/>
                <input type="text" placeholder="Username" value={this.state.username} className="name" onChange={(e)=>this.onChangeText("username",e.target.value)}/>
               </div>
               <div className="inputContainer">
                <FaLock size={20} color="#6eabc3"/>
                <input type="password" placeholder="Password" value={this.state.password} className="name" onChange={(e)=>this.onChangeText("password",e.target.value)}/>
               </div>
                 <div className="login-button">
                     <button onClick={this.login}>Login</button>
                 </div>
              
               <p className="link">
               <Link to="/" className="link">Forgot password ?</Link> Or <Link to="/" className="link">Sign Up</Link>
               </p>
              
    
            </div>
          </div>
          
   
        </div>
       </div>
    )
  }
}
