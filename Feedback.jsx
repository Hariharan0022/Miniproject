import React,{ Component} from 'react';
 import'./Feedback.css'
import axios from 'axios'

class  Feedback extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            email:'',
            feedback:'',
        };
    }
    
  
    handleUsernameChange=(event)=>{
        this.setState({username:event.target.value})
    };
    
    handleEmailChange=(event)=>{
        this.setState({email:event.target.value})
    };
   
    handleFeedbackChange=(event)=>{
        this.setState({feedback:event.target.value})
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
          
            username: this.state.username,
           
            email: this.state.email,
            
            feedback: this.state.feedback,
        };
        
        axios.post('http://localhost:8082/p', data)
    }
 
     render(){
    return ( 
        <>
        <center>
        <div className='background'>
        <h1>Feedback Form</h1>
        <div className='containerd'>
          
        <form onSubmit={this.handleSubmit}>
           

            <div className='rowd'>
                <label>Name: </label><br></br>
                <input type="text" id='EmployeeName' placeholder=' Enter your name...' value={this.state.username}
                    onChange={this.handleUsernameChange}/>
            </div><br></br>
           

            <div className='rowd'>
                <label>Email : </label><br></br>
                <input type="text" id='email' placeholder=' Enter your Email Id...' value={this.state.email}
                    onChange={this.handleEmailChange}/>
            </div><br></br>
    

            <div className='rowd'>
                <label>Feedback : </label><br></br>
                <input type="text" id='address' placeholder=' Enter your Address...' value={this.state.feedback}
                    onChange={this.handleFeedbackChange}/>
            </div><br></br>

            <div className='rowd'>
                <button className='btn btn-primary'>Submit</button>
            </div>
        </form>
        </div>
        </div>
        </center>
        </>
     );
        }
}

export default Feedback