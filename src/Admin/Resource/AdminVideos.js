import React from 'react';
import AdminSidebar from "../AdminDashboard";
import "../AdminDashboard.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Lectures from "./Lectures/Lectures";
import PastPaper from "./Pastpaper/PastPaper";
import ExamPaper from "./Exampaper/ExamPaper";
import Questions from "./Questions/Questions";

import Navbar from "../..//Shared/Navbar/Navbar";
import Lecture from "./Lectures/Lectures";

function AdminVideos() {
    return (
     <div>
         
      <div className="adminDashboard">
        <AdminSidebar />
        <div className="adminDashboard__container">
          <Lecture />
        </div>
      </div>
     </div>
    )
}

export default AdminVideos
