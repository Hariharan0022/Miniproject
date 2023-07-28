import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import '../Admin.css'


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/DashboardUser",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/Self",
            name:"Self Service",
            icon:<FaUserAlt/>
        },
        {
            path:"/Attendance",
            name:"Attendance",
            icon:<FaRegChartBar/>
        },
        {
            path:"/Performance",
            name:"Performance",
            icon:<FaCommentAlt/>
        },
        {
            path:"/Salar",
            name:"Salary",
            icon:<FaShoppingBag/>
        },
        {
            path:"/productList",
            name:"Project",
            icon:<FaThList/>
        },
        {
            path:"/Training",
            name:"Training",
            icon:<FaThList/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">T4TECH</h1>
                   <div style={{marginLeft: isOpen ? "70px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;