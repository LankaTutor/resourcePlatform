import React, { Component } from "react";
import "./ProfilePage.scss";
import ProfileSidebar from "../../Components/ProfileSidebar";
import Navbar from "../../../Shared/Navbar/Navbar";
import SubNavbar from "../../../Shared/Navbar/SubNavbar";
import Content from "../../Components/Content";
import Footer from "../../../Shared/Footer";

export default class StudentProfilePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SubNavbar />
        <div className="profile-container">
          <ProfileSidebar />
          <Content/>
        </div>
        <Footer />
      </div>
    );
  }
}
