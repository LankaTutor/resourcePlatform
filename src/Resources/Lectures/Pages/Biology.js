import React from "react";
import Navbar from "../../../Shared/Navbar/Navbar";
import SubNavbar from "../../../Shared/Navbar/SubNavbar";
import PageHeader from "../../../Shared/PageHeader";
import AllCourses from "../Components/AllCourses";
function Biology() {
  return (
    <div>
      <Navbar />
      <SubNavbar />
      <PageHeader title="Biology" subTitle="All the units in Biology " />
      <AllCourses />
    </div>
  );
}

export default Biology;
