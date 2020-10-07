import React from "react";
import Header from "../Components/Header";
import LatestArticles from "../Components/LatestArticles";
import SubHeader from "../Components/SubHeader";
import Navbar from "../../Shared//Navbar/Navbar";
import SubNavbar from "../../Shared//Navbar/SubNavbar";
import Footer from "../../Shared/Footer";
import AllCourses from "../../Resources/Lectures/Components/AllCourses";

export default function Home() {
  return (
    <div>
      <Navbar />
      <SubNavbar />
      <Header />
      <SubHeader />
      <AllCourses />

      <LatestArticles />

      <SubHeader />
      <Footer />
    </div>
  );
}
