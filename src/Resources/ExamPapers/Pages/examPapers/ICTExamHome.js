import React from "react";
import Navbar from "../../../../Shared/Navbar/Navbar";
import SubNavbar from "../../../../Shared/Navbar/SubNavbar";
import SideBar from "../../../../Shared/SideBar";
import Footer from "../../../../Shared/Footer";
import ICTExamPaper from "../../Components/mentors/ICTExamPaper";
import ICTFilter from "../../Components/students/ICTFilter";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function ICTExamHome(props) {
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
                ICT
              </li>
            </ol>
          </nav>
          {details.role === "mentor"? (
            <ICTExamPaper subject="ICT"/>
          ) : (
            <ICTFilter subject="ICT"/>
          )}
          {/* <MathsPaper subject="Mathematics" /> */}
          {/* <Question /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

ICTExamHome.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
const mapStateToProps = state => ({
    auth: state.auth
  });
  
export default connect(
    mapStateToProps
  )(ICTExamHome);
