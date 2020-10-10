import React, { Component } from "react";
import "./Content.css";

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card mx-5" style={{ backgroundColor: "#f5f5ef" }}>
        <div className="card-header ">
          <h4>Overview</h4>
        </div>
        <div className="container my-5 mx-3">
          <div className="card-deck">
            <div className="card-block mx-2" style={{ width: "30%" }}>
              <img
                className="card-img-top"
                src="../../images/math3.jpg"
                style={{ width: "100%", height: "200px" }}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Combined Maths</h5>
                <a href="#" className="btn btn-info">
                  Click Here
                </a>
                <br />
              </div>
            </div>
            <div className="card-block mx-2" style={{ width: "30%" }}>
              <img
                className="card-img-top"
                src="../../images/physics.jpg"
                style={{ width: "100%", height: "200px" }}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Physics</h5>
                <a href="#" className="btn btn-info">
                  Click Here
                </a>
                <br />
              </div>
            </div>

            <div className="card-block mx-2" style={{ width: "30%" }}>
              <img
                className="card-img-top"
                src="../../images/chemistry.jpg"
                style={{ width: "100%", height: "200px" }}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Chemistry</h5>
                <a href="#" className="btn btn-info">
                  Click Here
                </a>
                <br />
              </div>
            </div>
            <div className="card-block mx-2" style={{ width: "30%" }}>
              <img
                className="card-img-top"
                src="../../images/ICT3.jpg"
                style={{ width: "100%", height: "200px" }}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">ICT</h5>
                <a href="#" className="btn btn-info">
                  Click Here
                </a>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Overview;
