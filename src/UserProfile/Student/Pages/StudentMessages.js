import React, { Component } from "react";
import "./ProfilePage.scss";
import ProfileSidebar from "../../Components/ProfileSidebar";
import Navbar from "../../../Shared/Navbar/Navbar";
import SubNavbar from "../../../Shared/Navbar/SubNavbar";
import Messages from "../../Components/Messages";
import Footer from "../../../Shared/Footer";

export default class StudentMessages extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SubNavbar />
        <div className="profile-container">
          <ProfileSidebar />
          <Messages/>
        </div>
        <Footer />
      </div>
    );
  }
}
