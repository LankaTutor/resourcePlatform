import React from "react";
import "./Header.scss";

import logo from "../../Images/logo.png";
export default function Header() {
  return (
    <div className="header-container">
      <div className="header-container__text">
        <h1 className="header-container__logo">Tutor Lanka</h1>
        <h4>You are browsing the best resource for Advanced Level</h4>
        <div className="input-group md-form form-sm form-1 pl-0 mt-3">
          <div className="input-group-prepend">
            <span
              className="input-group-text bg-secondary lighten-3"
              id="basic-text1"
            >
              <i class="fas fa-search text-white" aria-hidden="true"></i>
            </span>
          </div>
          <input
            className="form-control my-0 py-1"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <div className="header-container__catogory">
          <ul>
            <li>
              <i className="fas fa-book mr-1"></i>Pastpapers
            </li>
            <li>
              <i className="far fa-copy mr-1"></i>
              Exampapers
            </li>
            <li>
              <i className="fa fa-fire mr-1"></i>
              Question Bank
            </li>
            <li>
              <i className="far fa-sticky-note mr-1"></i>
              Short Notes
            </li>
            <li>
              <i className="far fa-newspaper mr-1"></i>
              Articles
            </li>
          </ul>
        </div>
      </div>
      <div className="header-container__overlay"></div>
    </div>
  );
}
