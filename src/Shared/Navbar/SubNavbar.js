import React from "react";
import { useSelector } from "react-redux";

import "./SubNavbar.scss";

export default function SubNavbar() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <nav
      className="mb-1 navbar navbar-expand-lg navbar-light py-3"
      style={{ boxShadow: "0 0 1px 0" }}
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          TutorLanka
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent-4"
          aria-controls="navbarSupportedContent-4"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
          <div className="navbar-nav ml-auto">
            <h6 className="mr-4">
              {isAuth ? (
                <a href="/pastpapers">
                  <i className="fas fa-book mr-2"></i>
                  Pastpapers
                </a>
              ) : (
                <a href="#">
                  <i className="fas fa-book mr-2"></i>
                  Pastpapers
                </a>
              )}
            </h6>
            <h6 className="mr-4">
              {isAuth ? (
                <a href="/exampapers">
                  <i className="far fa-copy mr-2"></i>
                  Exampapers
                </a>
              ) : (
                <a href="/#">
                  <i className="far fa-copy mr-2"></i>
                  Exampapers
                </a>
              )}
            </h6>
            <h6 className="mr-4">
              {isAuth ? (
                <a href="/shortnotes">
                  <i className="far fa-sticky-note mr-2"></i>
                  Short Notes
                </a>
              ) : (
                <a href="#">
                  <i className="far fa-sticky-note mr-2"></i>
                  Short Notes
                </a>
              )}
            </h6>
            <h6 className="mr-4">
              {isAuth ? (
                <a href="/questionbank">
                  <i className="fa fa-fire mr-2"></i>
                  Question Bank
                </a>
              ) : (
                <a href="#">
                  <i className="fa fa-fire mr-2"></i>
                  Question Bank
                </a>
              )}
            </h6>
            <h6 className="mr-4">
              {isAuth ? (
                <a href="/articles">
                  <i className="far fa-newspaper mr-2"></i>
                  Articles
                </a>
              ) : (
                <a href="#">
                  <i className="far fa-newspaper mr-2"></i>
                  Articles
                </a>
              )}
            </h6>
            <h6>
              {isAuth ? (
                <a href="/forum">
                  <i className="fa fa-question-circle mr-2"></i>
                  Forum
                </a>
              ) : (
                <a href="#">
                  <i className="fa fa-question-circle mr-2"></i>
                  Forum
                </a>
              )}
            </h6>
          </div>
        </div>
      </div>
    </nav>
  );
}
