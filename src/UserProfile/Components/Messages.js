import React, { Component } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";

class Messages extends Component {
  render() {
    return (
      <div className="card mx-5" style={{ backgroundColor: "#f5f5ef" }}>
        <div className="card-header ">
          <h4>Notification Messages</h4>
        </div>
        <div className="container content my-2">
          <div class="row">
            <div className="col">
              <div className="mx-2">
                <div class="alert alert-danger" role="alert">
                  This is a primary alert with{" "}
                  <a href="#" class="alert-link">
                    Security Alert
                  </a>
                  . Click here for more details.
                </div>
                <div class="alert alert-secondary" role="alert">
                  2018 chemistry past paper is now available{" "}
                </div>
                <div class="alert alert-success" role="alert">
                  2017 ICT paper is now available{" "}
                </div>
                <div class="alert alert-info" role="alert">
                  2019 Physics past paper answer is updated{" "}
                </div>
              </div>
            </div>
            <div className="col">
              <div className="mx-2">
                <div class="alert alert-primary" role="alert">
                  Quantum Physics e-learning book is availbale in article
                  section{" "}
                </div>
                <div class="alert alert-warning" role="alert">
                  New Trignomamtry article is available{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Messages;
