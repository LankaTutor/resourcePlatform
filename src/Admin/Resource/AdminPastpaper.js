import React from 'react';
import AdminSidebar from "../AdminDashboard";
import "../AdminDashboard.css";
import PastPaper from "./Pastpaper/PastPaper";


function AdminPastpaper() {
    return (
     <div>
      <div className="adminDashboard">
        <AdminSidebar />
        <div className="adminDashboard__container">
          <PastPaper />
        </div>
      </div>
     </div>
    )
}

export default AdminPastpaper
