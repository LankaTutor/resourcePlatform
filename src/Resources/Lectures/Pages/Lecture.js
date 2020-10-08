import React from "react";
import Navbar from "../../../Shared/Navbar/Navbar";
import SubNavbar from "../../../Shared/Navbar/SubNavbar";
import PageHeader from "../../../Shared/PageHeader";
import AllSubjects from "../Components/AllSubjects";
function Lecture() {
  return (
    <div>
      <Navbar />
      <SubNavbar />
      <AllSubjects />
    </div>
  );
}

export default Lecture;
