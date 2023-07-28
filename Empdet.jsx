import React, { useState } from 'react';
import './Empdet.css'
import axios from 'axios'

const AddShowForm = () => {
    const [empid, setempid] = useState('');
    const [empname, setempname] = useState('');
    const [dob, setdob] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [gender, setgender] = useState('');
    const [mobile, setmobile] = useState('');
    const [address, setaddress] = useState('');
    
    const [notification, setNotification] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formData = {
        empid:empid,
        empname:empname,
        dob:dob,
        email:email,
        password:password,
        gender:gender,
        mobile:mobile,
        address:address
      };
  
      // Get the JWT token from the local storage (assuming it's saved after login)
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No JWT token found.');
        return;
      }
  
      try {
        // Replace 'http://example.com/api/concerts' with the actual endpoint URL
        const response = await axios.post('http://127.0.0.1:8081/post', formData, {
          headers: {
            Authorization: `Bearer ${token}`, // Include the JWT token as a Bearer token
          },
        });
  
        console.log(response.data); // Handle the response as needed
        // Optionally, you can reset the form fields after successful submission:
        setempid('');
        setempname('');
        setdob('');
        setemail('');
        setpassword('');
        setgender('');
        setmobile('');
        setaddress('');
       
      } catch (error) {
        console.error(error);
      }
    };
    

  return (
    <div className='addcrud'>
      <h1 className='arh1'>Add Employee</h1>
      <form className="arform"onSubmit={handleSubmit}>
        <div>
          <label className="arid"htmlFor="showId">Employee ID:</label><br></br>
         <center> <input type="text" id="arshowId" value={empid} onChange={(e) => setempid(e.target.value)} /></center>
          {formErrors.empid && <p className="error-message">{formErrors.empid}</p>}
        </div><br></br>
        <div>
          <label className="arlead"htmlFor="showLead">Employee Name:</label><br></br>
          <center><input type="text" id="arshowId" value={empname} onChange={(e) => setempname(e.target.value)} /></center>
          {formErrors.empname && <p className="error-message">{formErrors.empname}</p>}
        </div><br></br>
        <div>
          <label className="artitle"htmlFor="showTitle">DOB:</label><br></br>
          <center><input type="date" id="arshowId" value={dob} onChange={(e) => setdob(e.target.value)} /></center>
          {formErrors.dob && <p className="error-message">{formErrors.dob}</p>}
        </div><br></br>
        <div>
          <label className="argenre"htmlFor="genre">EMAIL:</label><br></br>
          <center><input type="email" id="arshowId" value={email} onChange={(e) => setemail(e.target.value)} /></center>
          {formErrors.email && <p className="error-message">{formErrors.email}</p>}
        </div><br></br>
        <div>
          <label className='artype'>PASSWORD:</label><br></br>
         <center><input type="password" id="arshowId" value={password} onChange={(e) => setpassword(e.target.value)} /></center>
          {formErrors.password && <p className="error-message">{formErrors.password}</p>}
        </div><br></br>
        <div>
          <label className="ardate"htmlFor="date">GENDER:</label><br></br>
        <center><input type="text" id="arshowId" value={gender} onChange={(e) => setgender(e.target.value)} /></center>
        </div><br></br>
        
        <div>
          <label className="artimeto"htmlFor="toTime">ADDRESS:</label><br></br>
        <center>  <input type="text" id="arshowId" value={address} onChange={(e) => setaddress(e.target.value)} /></center>
        </div><br></br>
        <div>
          <label className="artimeto"htmlFor="toTime">MOBILE:</label><br></br>
        <center>  <input type="text" id="arshowId" value={mobile} onChange={(e) => setmobile(e.target.value)} /></center>
        </div><br></br>
       
        <center><button className="arsubmit"type="submit">Add</button></center>
      </form>
      {notification && <p className='arp'>{notification}</p>}
    </div>
  );
};

export default AddShowForm;