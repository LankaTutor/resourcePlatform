import React from "react";
import Header from "./Components/mentor/header";
import UserCard from "./Components/mentor/userCards";
import Footer from "./Components/mentor/footer";
import Navbar from "../Shared/Navbar/Navbar";
import SubNavbar from "../Shared/Navbar/SubNavbar";

import "./Components/styles.css";

function MentorProfile() {
  return (
    <div className="App">
      <Navbar />
      <SubNavbar />
      <div className="card">
        <Header />
        <UserCard />
      </div>
      <Footer />
    </div>
  );
}

export default MentorProfile;
