import React from "react";
import "./Footer.scss";
export default function Footer() {
  return (
    <div className="footer-container">
        <div className="footer-container__catogory row">
          <div className="col-lg-1">
            </div>
            <div className="col-lg-1">
              <ul className="list-group">
                <li><a href="/login">Login</a></li>
                <li><a href="/signup">Join Us</a></li>
              </ul>
            </div>
            <div className="col-lg-1">
              <ul className="list-group">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="col-lg-1">
              <ul className="list-group">
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
              </ul>
            </div>
            <div className="col-lg-1">
              <ul className="list-group">
                <li><a href="#">FAQ's</a></li>
              </ul>
            </div>
            <div className="col-lg-4">
            </div>
            <div className="col-lg-3">
              <a className="footer-logo" href="/">
              <img src="https://i.ya-webdesign.com/images/libro-vector-book-5.png" width="40" height="40" class="" alt="" />
                Lanka Tutor </a><p className="footer-container__copyright">
              <i className="fa fa-copyright pt-1 mr-1"></i>
              copyright 2020. All Rights Reserved.</p>
            </div>
          </div>
    </div>
  );
}
