import React,{useState} from 'react'
import './Signup.css'
import axios from 'axios'

import LoginForm from './loginform';
import {Link} from "react-router-dom"
function Signup() {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isButtonDisabled = !name || !email || !password ;

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (isButtonDisabled) {
      setError('Please fill out all the fields.');
      return;
    }
    // Prepare the data to be sent to the server
    const formData = {
      name: name,
      email: email,
      password: password
    };
    //  console.log(formData)
    // Make the POST request using axios
    axios.post('http://localhost:8081/api/v1/auth/register', formData)
      .then(response => {
        // Handle the response from the server (if needed)
        console.log('Data submitted successfully:', response.data);
        setError('');
      })
      .catch(error => {
        // Handle errors (if any) from the server
        console.error('Error submitting data:', error);
      });
  };
  return (
    <div className='ruba'>
      <div class="wrapper">
	<div class="registration_form">
		<div class="title">
			Registration Form
		</div>

		<form onSubmit={handleSubmit}>
			<div class="form_wrap">
            <div class="input_wrap">
					<label for="name">UserName</label>
					<input type="text" value={name} name="name" htmlFor="name" onChange={(e)=>setName(e.target.value)}id="name"></input>
				</div>
					<br></br>
				<div class="input_wrap">
					<label for="email">Email </label>
					<input type="email"value={email} name="email" htmlFor="email" onChange={(e)=>setEmail(e.target.value)} id="email1"></input>
				</div>
				
	<br></br>
				<div class="input_wrap">
					<label for="password">Password</label>
					<input type="password" value={password} name="password" htmlFor="password" onChange={(e)=>setPassword(e.target.value)}id="password1"></input>
				</div>
                <br>
                </br><br></br><br></br>
				{error && <div className="error">{error}</div>}
				<div class="input_wrap">
					<input type="submit" value="Register Now" class="submit_btn" disabled={isButtonDisabled}></input>
				</div>
        <br>
        </br><br></br>
        <h5 className="signuplink" >Already have an account? <Link to="/LoginForm">&nbsp;&nbsp;<a className='aforapple'>Log In</a></Link>  </h5>
			</div>
		</form>
	</div>
</div>
    </div>
  )
}

export default Signup
