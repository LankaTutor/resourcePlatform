import React from "react";
import "./Footer.scss";
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-container__text">
        <div>
          <h1 className="footer-container__logo center pt-2">Tutor Lanka</h1>
          <p className="footer-container__copyright">
            <i className="fa fa-copyright center pt-1 mr-1"></i>
            copyright 2020. All Rights Reserved.
          </p>
        </div>
        <div className="footer-container__catogory">
          <ul>
            <li>
              <i className="fa fa-info-circle mr-1 color1"></i>
              <a href="#"> About Us</a>
            </li>
            <li>
              <i className="fa fa-list mr-1 color1"></i>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <i className="fa fa-lock mr-1 color1"></i>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <i className="fa fa-question-circle mr-1 color1"></i>
              <a href="#">FAQ's</a>
            </li>
            <li>
              <i className="fa fa-map-marker mr-1 color1"></i>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
