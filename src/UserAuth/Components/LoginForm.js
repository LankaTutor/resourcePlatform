import React, { Component } from "react";
import { render } from "@testing-library/react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

import "./UserAuth.scss";

import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/student");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/student"); // push user to dashboard when they login
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
    console.log(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="base-container " ref={this.props.containerRef}>
        <div className="header">Log In to your Account !!</div>
        <form noValidate onSubmit={this.onSubmit}>
          <div className="content">
            {/* <div className="image">
                <img src={loginImage} />
              </div>  */}
            <div className="form">
              <div className="form-group">
                {/* <label htmlFor="username">Username</label> */}
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder=" Email"
                  value={this.state.email}
                  error={errors.email}
                  onChange={this.onChange}
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound,
                  })}
                />
                <span className="red-text" style={{ color: "red" }}>
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              <div className="form-group">
                {/* <label htmlFor="password">Password</label> */}
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder=" Password"
                  value={this.state.password}
                  error={errors.password}
                  onChange={this.onChange}
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect,
                  })}
                />
                <span className="red-text" style={{ color: "red" }}>
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="submit" className="btn">
              Log In
            </button>
            <div className="pt-3">Or continue with your Google account</div>
            <GoogleLoginButton className="mt-3 mb-3" />
            <div className="text-center">
              <a href="/signup">Sign Up</a>
              <span className="p-2">|</span>
              <a href="/register">Forgot Password</a>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(withRouter(LoginForm));
