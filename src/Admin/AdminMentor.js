import React from 'react';
import AdminSidebar from "../Admin/AdminSidebar";
import "../Admin/AdminDashboard.css";
import { BrowserRouter as Router, Route } from "react-router-dom";


function AdminMentor() {
    return (
     <div>
         
      <div className="adminDashboard">
        <AdminSidebar />
        <div className="adminDashboard__container">
          Mentors
        </div>
      </div>
     </div>
    )
}

export default AdminMentor;
