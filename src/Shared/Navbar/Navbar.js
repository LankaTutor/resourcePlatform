import React from "react";
import { useHistory, Link } from "react-router-dom";
import "./Navbar.scss";
import {useSelector,useDispatch} from 'react-redux';
import { logoutUser } from "../../actions/authActions";
import Avatar from "@material-ui/core/Avatar";


export default function Navbar() {
  const isAuth = useSelector((state)=>state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const history = useHistory();

   const onLogoutClick = (e) => {
      e.preventDefault();
      dispatch(logoutUser());
      history.push("/login");
    };



  return (
    <nav className="navbar navbar-expand-lg navbar-custom navbar-light bg-light">
      <a className="navbar-brand header-container__logo" href="/">
        <img src="https://i.ya-webdesign.com/images/libro-vector-book-5.png" width="40" height="40" class="" alt="" />
        Tutor Lanka </a>
      <div className="container">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/mentors">
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
          <li className="nav-item dropdown">
              <select className="form-control">
                <option value="english">English Medium</option>
                <option value="tamil">Tamil Medium</option>
                <option value="sinhala">Sinhala Medium</option>
              </select>
          </li>
        </ul>
        {isAuth?
          <span className="navbar-text">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
              <button type="button" class="btn btn-light" onClick={onLogoutClick}>Logout</button>
                <Link className="nav-link" onClick={onLogoutClick}>
                  Logout
                </Link>
                {/* <button type="button" class="btn btn-light" onClick={onLogoutClick}>Logout</button> */}
              </li>
              <li class="nav-item">
                <a class="nav-link p-0" href="/student">
                  <img src="../../Images/avatar.png" class="rounded-circle z-depth-0"
                    alt="avatar image" height="40"/>
                </a>
              </li>
            </ul>
          </span>
          :
          <span className="navbar-text">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
              <li className="nav-item">
              <button className="btn btn-outline-warning my-2 my-sm-0"  href="/signup" type="submit"><a href="/signup">Sign up</a></button>
              </li>
            </ul>
          </span>
        }
      </div>
    </nav>
  );
}
