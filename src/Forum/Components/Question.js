import React, { Component } from "react";

import "./Question.scss";
export default class Question extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header ">
          <h4>Merging duplicate values into multi-dimensional array in PHP</h4>
          <span className="tag tag-teal mr-2">Math</span>
          <span className="tag tag-danger mr-2">Trignometry</span>
        </div>
        <div className="card-body">
          <div className="user mb-3">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <div className="user-info ml-3">
              <h5>Name name</h5>
              <small className="text-secondary">
                Published on 2012-Jul-20 14:00:20
              </small>
            </div>
          </div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
          assumenda eveniet veniam error natus, veritatis nulla asperiores
          doloremque laboriosam sequi temporibus possimus accusamus enim culpa
          blanditiis! Et quo porro ipsum...
          <br />
          <a href="#">Read more</a>
        </div>
      </div>
    );
  }
}
