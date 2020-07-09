import React, { Component } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import SubNavbar from "../../Shared/Navbar/SubNavbar";
import LoginForm from "../Components/LoginForm";

export default class Login extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SubNavbar />
        <LoginForm />
      </div>
    );
  }
}
