import React, { Component } from "react";

class ChemistryFilter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="card-deck">
          {/* <div className="card"> */}
            <div className="card-block mx-2" style={{width:'30%'}}>
              <img
                className="card-img-top"
                src="../../images/chem.jpg"
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
            {/* </div> */}
          </div>

          {/* <div className="card"> */}
            <div className="card-block mx-2" style={{width:'30%'}}>
              <img
                className="card-img-top"
                src="../../images/chem2.jpg"
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
          {/* </div> */}

          {/* <div className="card"> */}
            <div className="card-block mx-2" style={{width:'30%'}}>
              <img
                className="card-img-top"
                src="../../images/chem3.jpg"
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
          {/* </div> */}
        </div>
        <div className="card-deck mt-4">
          {/* <div className="card"> */}
            <div className="card-block mx-2" style={{width:'30%'}}>
              <img
                className="card-img-top"
                src="../../images/chem.jpg"
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
            {/* </div> */}
          </div>

          {/* <div className="card"> */}
            <div className="card-block mx-2" style={{width:'30%'}}>
              <img
                className="card-img-top"
                src="../../images/chem2.jpg"
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
          {/* </div> */}

          {/* <div className="card"> */}
            <div className="card-block mx-2" style={{width:'30%'}}>
              <img
                className="card-img-top"
                src="../../images/chem3.jpg"
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
          {/* </div> */}
        </div>
        </div>
    );
  }
}

export default ChemistryFilter;

