import React, { Component } from "react";

import "./SubNavbar.scss";
export default class SubNavbar extends Component {
  render() {
    return (
      <nav className="mb-1 navbar navbar-expand-lg navbar-light py-3">
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
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent-4"
          >
            <div className="navbar-nav ml-auto">
              <h6 className="mr-4">
                <a href="/pastpapers">
                  <i className="fas fa-book mr-2"></i>
                  Pastpapers
                </a>
              </h6>
              <h6 className="mr-4">
                <a href="/exampapers">
                  <i className="far fa-copy mr-2"></i>
                  Exampapers
                </a>
              </h6>
              <h6 className="mr-4">
                <a href="/shortnotes">
                  <i className="far fa-sticky-note mr-2"></i>
                  Short Notes
                </a>
              </h6>
              <h6 className="mr-4">
                <a href="/questionbank">
                  <i className="fa fa-fire mr-2"></i>
                  Question Bank
                </a>
              </h6>
              <h6 className="mr-4">
                <a href="/articles">
                  <i className="far fa-newspaper mr-2"></i>
                  Articles
                </a>
              </h6>
              <h6>
                <a href="/forum">
                  <i className="fa fa-question-circle mr-2"></i>
                  Forum
                </a>
              </h6>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
