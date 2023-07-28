import React from 'react';
import SidebarUser from '../components/SidebarUser'
import './DashboardUser.css';
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
        <div className="dash3">
          
                <h1 className="welcomeadmin">Welcome {user.name}</h1>
            
                <SidebarUser/>
              
               
        </div>
    );
};

export default Dashboard;