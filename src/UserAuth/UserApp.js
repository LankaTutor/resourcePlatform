import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";


import "bootstrap/dist/css/bootstrap.min.css";


import Login from "./Pages/Login";
import Signup from "./Pages/Signup";


function UserApp() {
  return (
    
    <Router>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
    </Router>
   
  );
}

export default UserApp;
