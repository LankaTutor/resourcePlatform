import React, { Component } from "react";
import "./ProfilePage.scss";
import ProfileSidebar from "../../Components/ProfileSidebar";
import Navbar from "../../../Shared/Navbar/Navbar";
import SubNavbar from "../../../Shared/Navbar/SubNavbar";

export default class StudentProfilePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SubNavbar />
        <div className="profile-container">
          <ProfileSidebar />
          <div>adada</div>
        </div>
      </div>
    );
  }
}
