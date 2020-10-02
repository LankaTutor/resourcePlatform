import React from "react";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark navbar-custom">
      <div className="container">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Mentors
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <select className="form-control">
                <option selected>Medium</option>
                <option value="english">English</option>
                <option value="tamil">Tamil</option>
                <option value="sinhala">Sinhala</option>
              </select>
            </a>
          </li>
        </ul>
        <span className="navbar-text">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signup">
                Signup
              </a>
            </li>
          </ul>
        </span>
      </div>
    </nav>
  );
}
