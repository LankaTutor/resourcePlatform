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
import Forum from "./Forum/Pages/Forum";
import Article from "./Article/Pages/Article";
import Login from "./UserAuth/Pages/Login";
import Signup from "./UserAuth/Pages/Signup";
import Shortnotes from "./Shortnotes/Pages/Shortnotes";
import QuestionBankHome from "./QuestionBank/Pages/QuestionBankHome.js";
import StudentProfilePage from "./UserProfile/Student/Pages/StudentProfilePage";

import PrivateRoute from "./UserAuth/private-route/PrivateRoute";
import Dashboard from "./UserAuth/dashboard/Dashboard";

import PastPaper from "./Paper/Pages/pastPapers/PaperHome";
import AddPastPaper from "./Paper/Components/mentors/AddPastPaper";
import MathsPaper from "./Paper/Pages/pastPapers/MathsHome";
import NotFoundPage from "./NotFound/NotFoundPage";
import Upload from "./Paper/Components/upload/Upload";
import StudentMessages from "./UserProfile/Student/Pages/StudentMessages";
import MentorProfile from "./UserProfile/mentorProfile";



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
          <Route exact path="/addPastpaper">
              <AddPastPaper
                subjects={[
                  "Combined Mathematics",
                  "Physics",
                  "Chemistry",
                  "Biology",
                  "IT",
                ]}
              />
          </Route>
          <Route exact path="/pastpapers">
              <PastPaper />
            </Route>
            <Route exact path="/pastpapers/Mathematics">
              <MathsPaper />
            </Route>
            <Route exact path="/upload">
              <Upload />
            </Route>

            <Route exact path="/mentors">
              <MentorProfile />
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
