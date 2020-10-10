import React from "react";
import Navbar from "../../../../Shared/Navbar/Navbar";
import SubNavbar from "../../../../Shared/Navbar/SubNavbar";
import SideBar from "../../../../Shared/SideBar";
import Footer from "../../../../Shared/Footer";
import PhysicsExamPaper from "../../Components/mentors/PhysicsExamPaper";
import PhysicsFilter from "../../Components/students/PhysicsFilter";
import PropTypes from "prop-types";
import { connect } from "react-redux";
function PhysicsExamHome(props) {
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
                Physics
              </li>
            </ol>
          </nav>
          {details.role === "mentor"? (
            <PhysicsExamPaper subject="Physics" />
          ) : (
            <PhysicsFilter subject="Physics"/>
          )}
          {/* <MathsPaper subject="Mathematics" /> */}
          {/* <Question /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

PhysicsExamHome.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
const mapStateToProps = state => ({
    auth: state.auth
  });
  
export default connect(
    mapStateToProps
  )(PhysicsExamHome);