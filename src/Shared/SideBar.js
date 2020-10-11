import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.scss";
export default class SideBar extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const Array = [
      {
        title: "Mathematics",
        color: "list-group-item-danger",
        icon:"fa-square-root-alt"
      },
      {
        title: "Biology",
        color: "list-group-item-primary",
        icon:"fa-heartbeat"
      },
      {
        title: "Physics",
        color: "list-group-item-success",
        icon:"fa-microscope"
      },
      {
        title: "Chemistry",
        color: "list-group-item-warning",
        icon:"fa-atom"
      },
      {
        title: "ICT",
        color: "list-group-item-secondary",
        icon:"fa-laptop-code"
      },
    ];

    return (
      <div className="sidebar card p-2">
        <h4 className="mb-4 text-center mt-2 card-header">{this.props.category}</h4>
        <ul className="list-group">
          {Array.map((arr) => {
            return (
              <NavLink to={`/${this.props.resource}/${arr.title}`}>
                <li
                className={`list-group-item  ${arr.color} d-flex justify-content-between align-items-center`}
              >
                <div>
                  <i className={`fas ${arr.icon} mr-2`}></i>
                  {arr.title}
                </div>
              </li>
              </NavLink>
              );
            })}
          </ul>
        </div>
    );
  }
}
