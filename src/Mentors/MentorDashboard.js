import React from "react";
import StudentSidebar from "./MentorSidebar";
import "./MentorDashboard.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Article from "./Resourse/Article/Article";

const routes = [
  {
    path: "/mentorDashboard/article",
    exact: true,
    main: () => <Article />,
  },
  {
    path: "/admin/student-management",
    exact: true,
    main: () => <h1>hi</h1>,
  },
];
function MentorDashboard() {
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
  
  export default MentorDashboard;
  