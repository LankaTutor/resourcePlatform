import React, { Component } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import SubNavbar from "../../Shared/Navbar/SubNavbar";
import SigninForm from "../Components/SigninForm";

export default class Login extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SubNavbar />
        <SigninForm />
      </div>
    );
  }
}
