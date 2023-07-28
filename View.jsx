import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './View.css'

function View() {
  const [taskData, setTaskData] = useState([]); // Fix variable name here

  useEffect(() => {
    const fetchTaskData = async () => {
      const token = localStorage.getItem('token');
      console.log(token);
      try {
        const response = await axios.get('http://localhost:8081/get', {
          headers: {
            "cache-control": 'no-cache',
            "Authorization": `Bearer ${token}`, // Add the token to the request headers
          },
        });

        setTaskData(response.data);
        console.log("response.data",response)
      } catch (error) {
        console.log(error);
      }
    };

    fetchTaskData();
  }, []);

  useEffect(() => {
    console.log(taskData); // This will log the updated dataList whenever it changes.
  }, [taskData]);

  return (
    <div className="viewbgoff">
      
      <center><table className="gen">
      <div className="container12">
        <thead>
          <tr className="form-title">
            <th className="header-cell">Emp Id</th>
            <th className="header-cell">Emp name</th>
            <th className="header-cell">Dob</th>
            <th className="header-cell">Email</th>
            <th className="header-cell">Password</th>
            <th className="header-cell">Gender</th>
            <th className="header-cell">Mobile</th>
            <th className="header-cell">Address</th>
           
          
          </tr>
        </thead>
        <tbody>
          {taskData.map((employee) => (
            <tr key={employee.empid}>
                <td>{employee.empid}</td>
              <td>{employee.empname}</td>
              <td>{employee.dob}</td>
              <td>{employee.email}</td>
              <td>{employee.password}</td>
              <td>{employee.gender}</td>
              <td>{employee.mobile}</td>
              <td>{employee.address}</td>
              
            
            
              
            </tr>
          ))}
        </tbody>
        </div>
      </table></center>
    </div>
  );
}

export default View