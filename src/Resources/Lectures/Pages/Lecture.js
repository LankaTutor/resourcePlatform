import React from "react";
import Navbar from "../../../Shared/Navbar/Navbar";
import SubNavbar from "../../../Shared/Navbar/SubNavbar";
import PageHeader from "../../../Shared/PageHeader";
import AllCourses from "../Components/AllCourses";
function Lecture() {
  return (
    <div>
      <Navbar />
      <SubNavbar />
      <AllCourses />
    </div>
  );
}

export default Lecture;
