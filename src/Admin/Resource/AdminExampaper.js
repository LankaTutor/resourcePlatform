import React from 'react';
import AdminSidebar from "../AdminDashboard";
import "../AdminDashboard.css";
import ExamPaper from './Exampaper/ExamPaper';


function AdminExampaper() {
    return (
     <div>
      <div className="adminDashboard">
        <AdminSidebar />
        <div className="adminDashboard__container">
          <ExamPaper />
        </div>
      </div>
     </div>
    )
}

export default AdminExampaper;
