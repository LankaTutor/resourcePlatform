import React from "react";
import Navbar from "../../../../Shared/Navbar/Navbar";
import SubNavbar from "../../../../Shared/Navbar/SubNavbar";
import SideBar from "../../../../Shared/SideBar";
import Footer from "../../../../Shared/Footer";
import BioExamPaper from "../../Components/mentors/BioExamPaper";
import BioFilter from "../../Components/students/BioFilter";
import PropTypes from "prop-types";
import { connect } from "react-redux";


function BiologyExamHome(props) {
    const {user} = props.auth
    const details = {
      role: user.role,
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
              <li class="breadcrumb-item">
                <a href="/exampapers">ExamPapers</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Biology
              </li>
            </ol>
          </nav>
          {details.role === "mentor"? (
            <BioExamPaper subject="Biology"/>
          ) : (
            <BioFilter subject="Biology"/>
          )}
          {/* <MathsPaper subject="Mathematics" /> */}
          {/* <Question /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

BiologyExamHome.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
const mapStateToProps = state => ({
    auth: state.auth
  });
  
export default connect(
    mapStateToProps
  )(BiologyExamHome);