import React from "react";
import Navbar from "../../../../Shared/Navbar/Navbar";
import SubNavbar from "../../../../Shared/Navbar/SubNavbar";
import Question from "../../../Forum/Components/Question";
import PageHeader from "../../../../Shared/PageHeader";
import SideBar from "../../../../Shared/SideBar";
import Footer from "../../../../Shared/Footer";

export default function ExamPaperHome() {
  return (
    <div>
      <div className="navbar-fix">
        <Navbar />
        <SubNavbar />
        <PageHeader
          title="Past Papers"
          subTitle="Past Papers & Answer Schemes"
        />
      </div>
      <div className="wrapper mt-5">
        <SideBar category="ExamPapers Category" resource="exampapers" />
        <div className="p-5 main_content">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Library</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                ExamPapers
              </li>
            </ol>
          </nav>
          <Question />
        </div>
      </div>
      <Footer />
    </div>
  );
}
