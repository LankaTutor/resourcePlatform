import React from "react";
import { useSelector } from "react-redux";

import "./SubNavbar.scss";

export default function SubNavbar() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

<<<<<<< HEAD
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
=======
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
              {/* {isAuth? */}
>>>>>>> efb239e10f85cb53af3918b8259b736100355a9d
                <a href="/pastpapers">
                  <i className="fas fa-book mr-2"></i>
                  Pastpapers
                </a>
<<<<<<< HEAD
              ) : (
=======
                {/* :
>>>>>>> efb239e10f85cb53af3918b8259b736100355a9d
                <a href="#">
                  <i className="fas fa-book mr-2"></i>
                  Pastpapers
                </a>
<<<<<<< HEAD
              )}
            </h6>
            <h6 className="mr-4">
              {isAuth ? (
=======
              } */}
              </h6>
              <h6 className="mr-4">
              {/* {isAuth? */}
>>>>>>> efb239e10f85cb53af3918b8259b736100355a9d
                <a href="/exampapers">
                  <i className="far fa-copy mr-2"></i>
                  Exampapers
                </a>
<<<<<<< HEAD
              ) : (
=======
                {/* :
>>>>>>> efb239e10f85cb53af3918b8259b736100355a9d
                <a href="/#">
                  <i className="far fa-copy mr-2"></i>
                  Exampapers
                </a>
<<<<<<< HEAD
              )}
            </h6>
            <h6 className="mr-4">
              {isAuth ? (
=======
              } */}
              </h6>
              <h6 className="mr-4">
              {/* {isAuth? */}
>>>>>>> efb239e10f85cb53af3918b8259b736100355a9d
                <a href="/shortnotes">
                  <i className="far fa-sticky-note mr-2"></i>
                  Short Notes
                </a>
<<<<<<< HEAD
              ) : (
=======
                {/* :
>>>>>>> efb239e10f85cb53af3918b8259b736100355a9d
                <a href="#">
                  <i className="far fa-sticky-note mr-2"></i>
                  Short Notes
                </a>
<<<<<<< HEAD
              )}
            </h6>
            <h6 className="mr-4">
              {isAuth ? (
=======
              }  */}
              </h6>
              <h6 className="mr-4">
              {/* {isAuth? */}
>>>>>>> efb239e10f85cb53af3918b8259b736100355a9d
                <a href="/questionbank">
                  <i className="fa fa-fire mr-2"></i>
                  Question Bank
                </a>
<<<<<<< HEAD
              ) : (
=======
                {/* :
>>>>>>> efb239e10f85cb53af3918b8259b736100355a9d
                <a href="#">
                  <i className="fa fa-fire mr-2"></i>
                  Question Bank
                </a>
<<<<<<< HEAD
              )}
            </h6>
            <h6 className="mr-4">
              {isAuth ? (
=======
              } */}
              </h6>
              <h6 className="mr-4">
              {/* {isAuth? */}
>>>>>>> efb239e10f85cb53af3918b8259b736100355a9d
                <a href="/articles">
                  <i className="far fa-newspaper mr-2"></i>
                  Articles
                </a>
<<<<<<< HEAD
              ) : (
=======
                {/* :
>>>>>>> efb239e10f85cb53af3918b8259b736100355a9d
                <a href="#">
                  <i className="far fa-newspaper mr-2"></i>
                  Articles
                </a>
<<<<<<< HEAD
              )}
            </h6>
            <h6>
              {isAuth ? (
=======
              }  */}
              </h6>
              <h6>
              {/* {isAuth? */}
>>>>>>> efb239e10f85cb53af3918b8259b736100355a9d
                <a href="/forum">
                  <i className="fa fa-question-circle mr-2"></i>
                  Forum
                </a>
<<<<<<< HEAD
              ) : (
=======
                {/* :
>>>>>>> efb239e10f85cb53af3918b8259b736100355a9d
                <a href="#">
                  <i className="fa fa-question-circle mr-2"></i>
                  Forum
                </a>
<<<<<<< HEAD
              )}
            </h6>
=======
              } */}
              </h6>
            </div>
>>>>>>> efb239e10f85cb53af3918b8259b736100355a9d
          </div>
        </div>
      </div>
    </nav>
  );
}
