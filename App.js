import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Homepage from './homepage';
import Signup from './Admin/pages/Signup';
import LoginForm from './Admin/pages/loginform';
import Dashboard from './Admin/pages/Dashboard';
import DashboardUser from './Admin/pages/DashboardUser';
import Salary from './Admin/pages/Salary';
import Attendance from './Admin/pages/Attendance';
import Training from './Admin/pages/Training';
import Performance from './Admin/pages/Performance';
import Empdet from './Admin/pages/Empdet';
import About from './Admin/pages/About';
import LoginUser from './Admin/pages/LoginUser';
  
import Self from './Admin/pages/Self';
import View from './Admin/pages/View';

import Update from './Admin/pages/Update';
import Feedback from './Feedback';
import ViewFeedback from './ViewFeedback';




function App() {
  return (

   
 <Router>
 <Routes>
    <Route exact path='/' element={<Homepage/>}/>
    <Route exact path='/LoginForm' element={<LoginForm/>}/>
    <Route exact path='/Dashboard' element={<Dashboard/>}/>
    <Route exact path='/DashboardUser' element={<DashboardUser/>}/>
    <Route exact path='/LoginUser' element={<LoginUser/>}/>
    <Route exact path='/Self' element={<Self/>}/>


    <Route exact path='/Update' element={<Update/>}/>
    <Route exact path='/View' element={<View/>}/>
    
    <Route exact path='/Feedback' element={<Feedback/>}/>


  
   

    <Route exact path='/Attendance' element={<Attendance/>}/>
    <Route exact path='/Training' element={<Training/>}/>
    <Route exact path='/Performance' element={<Performance/>}/>
    <Route exact path='/Salary' element={<Salary/>}/>
    <Route exact path='/Empdet' element={<Empdet/>}/>
    <Route exact path='/About' element={<About/>}/>
    <Route exact path='/Signup' element={<Signup/>}/>
    <Route exact path='/ViewFeedback' element={<ViewFeedback/>}/>

 </Routes>

</Router> 
  );
}

export default App;