import React, { Component } from "react";
import Subject from "../Components/Subject";
import Navbar from "../../../Shared/Navbar/Navbar";
import SubNavbar from "../../../Shared/Navbar/SubNavbar";
import PageHeader from "../../../Shared/PageHeader";

import "./QuestionBankHome.scss";
export default class QuestionBankHome extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SubNavbar />
        <PageHeader
          title="Question Bank"
          subTitle="Practice Questions to better understand "
        />
        <div className="library-container p-5 mt-3">
          <Subject />
        </div>
      </div>
    );
  }
}
