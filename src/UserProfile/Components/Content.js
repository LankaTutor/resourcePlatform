import React, { Component } from "react";
import './Content.css';

class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card mx-5" style={{ backgroundColor: "#f5f5ef" }}>
        <div className="card-header ">
          <h4>Overview</h4>
        </div>
        <div className="row my-5 mx-3">
          <div className="col-sm-6">
             <div className="box">
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
             </div> 
          </div>
          <div className="col-sm-6">
            <div className="box" >
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
