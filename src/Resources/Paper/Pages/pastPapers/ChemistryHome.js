import React from "react";
import Navbar from "../../../../Shared/Navbar/Navbar";
import SubNavbar from "../../../../Shared/Navbar/SubNavbar";
import SubHeader from "../../../../Home/Components/SubHeader";
import PageHeader from "../../../../Shared/PageHeader";
import SideBar from "../../../../Shared/SideBar";
import Footer from "../../../../Shared/Footer";
import PastPaper from "../../Components/mentors/PastPaper";
//import MathsPaper from "../../Components/mentors/Maths";
import ChemistryPaper from "../../Components/mentors/ChemistryPastPaper";
import ChemistryFilter from "../../Components/students/ChemistryFilter";

export default function ChemistryHome() {
  // const isStudent = false;
  // const medium = english;
  const details = {
    isStudent: false,
    medium: ["tamil", "sinhala", "english"],
  };

  return (
    <div>
      <div className="navbar-fix">
        <Navbar />
        <SubNavbar />
        {/* <PageHeader
          title="Past Papers"
          subTitle="Combined Mathematics Past Papers & Answer Schemes"
        /> */}
      </div>
      <div className="wrapper mt-5">
        <SideBar category="Past Papers Category" resource="pastpapers" />
        <div className="p-5 main_content">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Library</a>
              </li>
              <li class="breadcrumb-item">
                <a href="/pastpapers">PastPapers</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Chemistry
              </li>
            </ol>
          </nav>
          {details.isStudent ? (
            <ChemistryFilter />
          ) : (
            <ChemistryPaper subject="Chemistry" medium="english" />
          )}
          {/* <MathsPaper subject="Mathematics" /> */}
          {/* <Question /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
