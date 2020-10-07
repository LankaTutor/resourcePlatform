import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

import "./UserAuth.scss";

class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      fullname: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
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

    const newUser = {
      fullname: this.state.fullname,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.registerUser(newUser, this.props.history);
    console.log(newUser);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="base-container " ref={this.props.containerRef}>
        <div className="header">Sign Up and Start Learning! </div>

        <div className="content">
          {/* <div className="image">
                <img src={loginImage} />
              </div> */}
          <form noValidate onSubmit={this.onSubmit}>
            <div className="form">
              <div className="form-group">
                {/* <label htmlFor="username">Full name</label> */}
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder=" Full Name"
                  value={this.state.fullname}
                  error={errors.fullname}
                  onChange={this.onChange}
                  className={classnames("", {
                    invalid: errors.fullname,
                  })}
                />
                <span className="red-text" style={{ color: "red" }}>
                  {errors.fullname}
                </span>
              </div>
              <div className="form-group">
                {/* <label htmlFor="email">Email</label> */}
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder=" Email"
                  value={this.state.email}
                  error={errors.email}
                  onChange={this.onChange}
                  className={classnames("", {
                    invalid: errors.email,
                  })}
                />
                <span className="red-text" style={{ color: "red" }}>
                  {errors.email}
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
                    invalid: errors.password,
                  })}
                />
                <span className="red-text" style={{ color: "red" }}>
                  {errors.password}
                </span>
              </div>
              <div className="form-group">
                {/* <label htmlFor="conformPassword">Conform Password</label> */}
                <input
                  type="password"
                  name="password2"
                  id="password2"
                  placeholder=" Confirm Password"
                  value={this.state.password2}
                  error={errors.password2}
                  onChange={this.onChange}
                  className={classnames("", {
                    invalid: errors.password2,
                  })}
                />
                <span className="red-text" style={{ color: "red" }}>
                  {errors.password2}
                </span>
              </div>
            </div>
            <div>
              <button type="submit" className="btn center">
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <div className="footer">
          <div className="font1 pt-3">
            By signing up, you are agree to our{" "}
            <a href="/terms">Terms of Use</a> and{" "}
            <a href="/policy">Privacy Policy.</a>
          </div>
          <div className="font2 pt-3">
            <center>
              Already have an Account? <a href="/login">log In</a>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

SignupForm.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(
  withRouter(SignupForm)
);
