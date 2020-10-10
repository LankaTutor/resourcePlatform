import React from "react";
import Navbar from "../../../../Shared/Navbar/Navbar";
import SubNavbar from "../../../../Shared/Navbar/SubNavbar";
import SideBar from "../../../../Shared/SideBar";
import Footer from "../../../../Shared/Footer";
import ChemistryExamPaper from "../../Components/mentors/ChemistryExamPaper";
import ChemistryFilter from "../../Components/students/ChemistryFilter";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function ChemistryExamHome(props) {
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
                Chemistry
              </li>
            </ol>
          </nav>
          {details.role === "mentor"? (
            <ChemistryExamPaper subject="Chemistry"/>
          ) : (
            <ChemistryFilter subject="Chemistry"/>
          )}
          {/* <MathsPaper subject="Mathematics" /> */}
          {/* <Question /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}


ChemistryExamHome.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
const mapStateToProps = state => ({
    auth: state.auth
  });
  
export default connect(
    mapStateToProps
  )(ChemistryExamHome);