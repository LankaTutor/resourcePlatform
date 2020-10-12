import React from "react";

import AdminSidebar from "./AdminSidebar";
import "./AdminDashboard.css";
import { BrowserRouter as Router, Route } from "react-router-dom";


import Navbar from "../Shared/Navbar/Navbar";


function AdminDashboard() {
  return (
    <Router>
      <div>
      <div className="adminDashboard">
        <AdminSidebar />
        <div className="adminDashboard__container">
         
        </div>
      </div>
      </div>
    </Router>
  );
}

export default AdminDashboard;
