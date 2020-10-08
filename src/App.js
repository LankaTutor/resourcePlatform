import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

import "./App.scss";

import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Home/Pages/Home";
import Forum from "./Resources/Forum/Pages/Forum";
import Article from "./Resources/Article/Pages/Article";
import Login from "./UserAuth/Pages/Login";
import Signup from "./UserAuth/Pages/Signup";
import Shortnotes from "./Resources/Shortnotes/Pages/Shortnotes";
import QuestionBankHome from "./Resources/QuestionBank/Pages/QuestionBankHome.js";
import StudentProfilePage from "./UserProfile/Student/Pages/StudentProfilePage";

import PrivateRoute from "./UserAuth/private-route/PrivateRoute";
import Dashboard from "./UserAuth/dashboard/Dashboard";

import PastPaper from "./Resources/Paper/Pages/pastPapers/PaperHome";
import AddPastPaperAnswer from "./Resources/Paper/Components/mentors/AddPastPaperAnswer";
import MathsPaper from "./Resources/Paper/Pages/pastPapers/MathsHome";
import PhysicsPaper from './Resources/Paper/Pages/pastPapers/PhysicsHome';
import BiologyPaper from './Resources/Paper/Pages/pastPapers/BiologyHome';
import ChemistryPaper from './Resources/Paper/Pages/pastPapers/ChemistryHome';
import ICTPaper from './Resources/Paper/Pages/pastPapers/ICTHome';
import NotFoundPage from "./NotFound/NotFoundPage";

//import Upload from "./Paper/Components/upload/Upload";
import StudentMessages from "./UserProfile/Student/Pages/StudentMessages";
import MentorProfile from "./UserProfile/mentorProfile";

import Upload from "./Resources/Paper/Components/upload/Upload";
//import Content from "./UserProfile/Components/Content";

import AdminDashboard from "./Admin/AdminDashboard";
import SigninPage from "./UserAuth/Pages/SigninPage";
import Lecture from "./Resources/Lectures/Pages/Lecture";
import Biology from "./Resources/Lectures/Pages/Biology";
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/forum">
              <Forum />
            </Route>
            <Route path="/shortnotes">
              <Shortnotes />
            </Route>
            <Route path="/questionbank">
              <QuestionBankHome />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/login1">
              <SigninPage />
            </Route>
            {/* <Route path="/login" component={Login} /> */}
            <Route path="/signup">
              <Signup />
            </Route>

            <PrivateRoute
              exact
              path="/student"
              component={StudentProfilePage}
            />
            <PrivateRoute
              exact
              path="/student/Messages"
              component={StudentMessages}
            />

            <Route path="/articles">
              <Article />
            </Route>
            <Route exact path="/pastpapers">
              <PastPaper />
            </Route>
            <Route exact path="/pastpapers/Mathematics">
              <MathsPaper />
            </Route>
            <Route exact path="/pastpapers/Physics">
              <PhysicsPaper />
            </Route>
            <Route exact path="/pastpapers/Biology">
              <BiologyPaper />
            </Route>
            <Route exact path="/pastpapers/Chemistry">
              <ChemistryPaper />
            </Route>
            <Route exact path="/pastpapers/ICT">
              <ICTPaper />
            </Route>


            {/* <Route path="/pastpapers/Mathematics/addAnswer">
              <AddPastPaperAnswer />
            </Route> */}

            <Route exact path="/upload">
              <Upload />
            </Route>

            <Route exact path="/mentors">
              <MentorProfile />
            </Route>
            <Route path="/admin" exact>
              <AdminDashboard />
            </Route>
            <Route path="/alsubjects" exact>
              <Lecture />
            </Route>
            <Route path="/alsubjects/biology" exact>
              <Biology />
            </Route>
            {/* <Route path="*" component={NotFoundPage} /> */}
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
