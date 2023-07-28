import React from 'react'
import './Training.css';
import Sidebar from '../components/Sidebar';
// import{
//     Chart as ChartJS,
//     ArcElement,
//     Tooltip,
//     Legend
// } from 'chart.js';

// import { Pie } from 'react-chartjs-2';

// ChartJS.register(
//     ArcElement,
//     Tooltip,
//     Legend
// );



function Training() {
    
        // const data={
        //      labels: ['One,;Two','Three'],
        //      datasets:[
        //         {
        //         data:[3,6,9],
        //         backgroundColor: ['aqua', 'bloodorange','purple']
        //         },
        //     ],
        // };
    
    
        // const options={
        //     title :{
        //         display:true,
        //         text:'Pie chart for Courses'
        //     },
        //     responsive: true


        // }
    
  return (
    
    <>
    
        <Sidebar/>
          <div className='trai'>
              <div className='intro'>
              <header className='head'>

                  <center><h1 className='train'>Training</h1></center>

              </header>
       
        

              
           
             
                  <div className='cover1'>
                      <table>
                          <thead>
                              <tr className='trow'>
                                  <th>Emoloyee Id</th>
                                  <th>Employee Name</th>
                                  <th>Course Name</th>
                                  <th>Course Id</th>
                                  <th>Time Period</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>1</td>
                                  <td>John phillips</td>
                                  <td>Front End Developing for Intermediates</td>
                                  <td>FD.101</td>
                                  <td>20 Days</td>
                              </tr>
                              <tr>
                                  <td>2</td>
                                  <td>Mark Antony</td>
                                  <td>Java Programming for Intermediates</td>
                                  <td>JP.201</td>
                                  <td>28 Days</td>
                              </tr>
                              <tr>
                                  <td>3</td>
                                  <td>Karl Cruise</td>
                                  <td>AWS Cloud Computing</td>
                                  <td>JP.201</td>
                                  <td>28 Days</td>
                              </tr>
                              <tr>
                                  <td>4</td>
                                  <td>James Cameroon</td>
                                  <td>Spring Tool Suite for Intermediates</td>
                                  <td>ST.306</td>
                                  <td>28 Days</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
                 
              </div>
              <div
                  style={{
                      padding: '20px',
                      width: '50px'
                  }}>
                    
                  {/* <Pie
                      // eslint-disable-next-line no-undef
                      data={data}
                      options={options}
                      

                  >

                  </Pie> */}
                  {/* <div className='co'>
                    <p>Congratulations on completing the training program! Your commitment to learning and personal development is commendable. We hope that the knowledge and skills you have gained will empower you to excel in your role and beyond. Remember, learning is a continuous journey, and we encourage you to keep seeking opportunities to expand your expertise. Thank you for investing your time and effort into this training. We believe it will make a positive difference in your professional growth.</p>
                  </div> */}
              </div>
              </div>
        
         
    </>
  )
};

export default Training