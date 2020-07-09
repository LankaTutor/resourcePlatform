import React, { Component } from "react";
import Subject from "../Components/Subject";
import Navbar from "../../Shared/Navbar/Navbar";
import SubNavbar from "../../Shared/Navbar/SubNavbar";
import PageHeader from "../../Shared/PageHeader";

import "./Shortnotes.scss";
export default class Shortnotes extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SubNavbar />
        <PageHeader
          title="ShortNotes"
          subTitle="Complete Reference Library for ALevel Subjects"
        />

        <Subject />
      </div>
    );
  }
}
