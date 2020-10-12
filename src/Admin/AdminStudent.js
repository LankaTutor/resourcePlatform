import React from 'react';
import AdminSidebar from "./AdminSidebar";
import "../Admin/AdminDashboard.css";
import { BrowserRouter as Router, Route } from "react-router-dom";


function AdminStudent() {
    return (
     <div>
         
      <div className="adminDashboard">
        <AdminSidebar />
        <div className="adminDashboard__container">
          Students
        </div>
      </div>
     </div>
    )
}

export default AdminStudent;
