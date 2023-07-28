import React, {useState } from "react";
import "./loginform.css";
import {Link} from "react-router-dom";
import "./Signup"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { login } from "./userSlice";
import { useDispatch } from "react-redux";

const LoginForm = () =>{
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username,setUsername] = useState('');
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      login(
          {
              name:username
          }
      )
  )

    // Perform validation of username and password
   
      // Prepare the data to be sent in the POST request
      
      try{
        const response = await axios.post('http://127.0.0.1:8081/api/v1/auth/authenticate',{
          "username":username,
          "email":email,
          "password":password
        })
        .then((response)=>{
          console.log(response.data);
          localStorage.setItem('token',response.data.token);
          console.log(localStorage.getItem('token'));
        })      
        
        alert("Login Successful.");
         navigate("/dashboard");
        
        }
        catch(error){
          alert("Invalid Password");
        }
      }
  const isButtonDisabled = !email || !password; // Disable button if username or password is empty
 

 
    return (
        <div className="body">
            
        <center><div className="cover">
         <form onSubmit={handleSubmit}>
            <h1 className="loginhead">Login</h1>

            <div className="row1">
            <br></br>
            <br></br>
            <h3>USERNAME</h3>
            <br></br>
           
            <input type="username" id="username" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
            </div>

            <div className="row1">
            <br></br>
            <br></br>
            <h3>EMAIL</h3>
            <br></br>
           
            <input type="email" id="email" placeholder="Email-Id" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            </div>
            
           

             
             <div className="row1">
            <br></br>
            <h3>PASSWORD</h3>
            <br></br>
            <input type="password" id="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
             </div>
        
            <br></br>
            
            <div className="row1">
                <br></br>
            <button type="submit" className="login-btn"disabled={isButtonDisabled} >Login</button>
            </div><br></br>
            

        </form>
        </div></center>
        </div>
    )
}
export default LoginForm