import React from "react";
import Navbar from "../../Shared//Navbar/Navbar";
import SubNavbar from "../../Shared/Navbar/SubNavbar";
import SubHeader from "../../Home/Components/SubHeader";
import "./Forum.scss";
import Question from "../Components/Question";
import PageHeader from "../../Shared/PageHeader";
import SideBar from "../../Shared/SideBar";
import Footer from "../../Shared/Footer";
export default function Forum() {
  return (
    <div>
      <div className="navbar-fix">
        <Navbar />
        <SubNavbar />
        <PageHeader
          title="Question Forum"
          subTitle="Post Your Questions Here!"
        />
      </div>

      <div className="wrapper mt-5">
        <SideBar />
        <div className="p-5 main_content">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Library</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Forum
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
