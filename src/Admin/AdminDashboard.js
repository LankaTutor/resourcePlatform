import React from "react";

import AdminSidebar from "./AdminSidebar";
import "./AdminDashboard.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Lectures from "./Resource/Lectures/Lectures";
import PastPaper from "./Resource/Pastpaper/PastPaper";
import ExamPaper from "./Resource/Exampaper/ExamPaper";
import Questions from "./Resource/Questions/Questions";

import Navbar from "../Shared/Navbar/Navbar";

const routes = [
  {
    path: "/admin/lectures",
    exact: true,
    main: () => <Lectures />,
  },
  {
    path: "/admin/pastpapers",
    exact: true,
    main: () => <PastPaper />,
  },
  {
    path: "/admin/exampapers",
    exact: true,
    main: () => <ExamPaper />,
  },
  {
    path: "/admin/questions",
    exact: true,
    main: () => <Questions />,
  },
  {
    path: "/admin/student-management",
    exact: true,
    main: () => <h1>hi</h1>,
  },
];
function AdminDashboard() {
  return (
    <Router>
      <div>
        <Navbar />

      <div className="adminDashboard">
        <AdminSidebar />
        <div className="adminDashboard__container">
          {routes.map((route, index) => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.main}
            ></Route>
          ))}
        </div>
      </div>
      </div>
    </Router>
  );
}

export default AdminDashboard;
