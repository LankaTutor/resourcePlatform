import React, { Component } from "react";
import "./SideBar.scss";
export default class SideBar extends Component {
  render() {
    const Array = [
      {
        title: "Mathematics",
        content_number: 2,
        color: "list-group-item-danger",
      },
      {
        title: "Biology",
        content_number: 4,
        color: "list-group-item-primary",
      },
      {
        title: "Physics",
        content_number: 5,
        color: "list-group-item-success",
      },
    ];
    return (
      <div className="sidebar card p-2">
        <h4 className="mb-4 text-center mt-2 card-header">Forum Category</h4>
        <ul className="list-group">
          {Array.map((arr) => {
            return (
              <li
                className={`list-group-item  ${arr.color} d-flex justify-content-between align-items-center`}
              >
                <div>
                  <i className="fas fa-square-root-alt mr-2"></i>
                  {arr.title}
                </div>
                <span className="badge badge-primary badge-pill">
                  {arr.content_number}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
