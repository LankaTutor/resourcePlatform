import React from "react";
import StudentSidebar from "./StudentSidebar";
import "./StudentDashboard.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function StudentDashboard() {
    return (
      <Router>
        <div className="studentDashboard">
          <StudentSidebar />
          <div className="studentDashboard__container">
          </div>
        </div>
      </Router>
    );
  }
  
  export default StudentDashboard;
  