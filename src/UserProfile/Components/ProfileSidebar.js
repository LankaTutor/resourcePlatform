import React, { Component } from "react";
import PropTypes from "prop-types";
import {Dropdown} from 'react-bootstrap';
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import axios from 'axios';
import "./ProfileSidebar.scss";

class ProfileSidebar extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  del = data => {
    var option = window.confirm(`Are you sure want to deactivate your account ${data.fullname} ?`);
    if(option){
        axios.delete(`/api/users/deactivate/${data.id}`).then(res=>{
           console.log(res);
      })
      this.props.logoutUser();
    }
    
  }

  render() {
    const { user } = this.props.auth;
    return (
      <div className="card">
        <div className="card-header text-center">
          <i className="fa fa-user-circle user-avatar mb-2" aria-hidden="true"></i>
          <br />
          {user.fullname.split(" ")[0]+" "+user.fullname.split(" ")[1]}
        </div>
        <div className="card-body">
          <div className="list-group">
            <a href="/student" className="list-group-item list-group-item-action">
              <i className="fa fa-address-card mr-2" aria-hidden="true"></i>
              Overview
            </a>
            <a href="/student/Messages" className="list-group-item list-group-item-action">
              <i className="fa fa-envelope mr-2" aria-hidden="true"></i>
              Messages
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <i className="fa fa-tasks mr-2" aria-hidden="true"></i>
              Progress
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <i className="fa fa-wrench mr-2" aria-hidden="true"></i>
              Settings
            </a>
          </div>
        </div>
        <button
           onClick={event => {
            this.del(user)
          }}
        >
          <div className="card-footer text-white bg-danger text-center">
            Deactivate{" "}
          </div>
        </button>
      </div>
    );
  }
}

ProfileSidebar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(ProfileSidebar);
