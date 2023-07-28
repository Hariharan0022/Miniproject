import React from 'react';
import Sidebar from '../components/Sidebar'
import './Dashboard.css';
import { Link } from 'react-router-dom';
import { logout } from './userSlice';
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from './userSlice';
const Dashboard = () => {
    const user=useSelector(selectUser)
    const dispatch = useDispatch();
    const handleLogout = (e) => {
      e.preventDefault();
      dispatch(logout());
    };
    return (
        <div className="dash">
          
                <h1 className="welcomeadmin">Welcome {user.name}</h1>
            
                <Sidebar/>
              
               
        </div>
    );
};

export default Dashboard;