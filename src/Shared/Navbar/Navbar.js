import React from "react";
import { useHistory } from "react-router-dom";
import "./Navbar.scss";
import {useSelector,useDispatch} from 'react-redux';
import { logoutUser } from "../../actions/authActions";


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
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark navbar-custom">
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
          <li className="nav-item">
              <select className="form-control">
                <option selected>English</option>
                <option value="tamil">Tamil</option>
                <option value="sinhala">Sinhala</option>
              </select>
           
          </li>
        </ul>
        {isAuth?
          <span className="navbar-text">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
              <button type="button" class="btn btn-light" onClick={onLogoutClick}>Logout</button>
                
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
                <a className="nav-link" href="/signup">
                  Signup
                </a>
              </li>
            </ul>
          </span>
        }
      </div>
    </nav>
  );
}
