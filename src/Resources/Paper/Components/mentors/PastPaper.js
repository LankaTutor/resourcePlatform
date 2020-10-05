import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

import Navbar from "../../../../Shared/Navbar/Navbar";
import SubNavbar from "../../../../Shared/Navbar/SubNavbar";

// $(document).ready(function () {
//   $("#myInput").on("keyup", function () {
//     var value = $(this).val().toLowerCase();
//     $("#myTable tr").filter(function () {
//       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
//     });
//   });
// });

class PastPaper extends Component {
  constructor() {
    super();

    this.state = {
      subject: "",
    };
  }

  render() {
    return (
      <div>
        <br />
        <div>
          <Link to="/addPastpaper">
            {/* <a href="/addPastpaper"> */}
            <button
              type="submit"
              class="btn btn-primary"
              style={{ float: "right" }}
            >
              Add Paper
            </button>
            {/* </a> */}
          </Link>
          <h2>Available {this.props.subject} Past Papers </h2>
          <input
            className="form-control"
            id="myInput"
            type="text"
            placeholder="Search.."
          />
          <br />
          <table
            className="table table-bordered table-striped"
            style={{ textAlign: "center" }}
          >
            <thead>
              <tr>
                <th>Year</th>
                <th>Type</th>
                <th>Question Paper</th>
                <th>Answer Scheme</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody id="myTable">
              <tr>
                <td>2017</td>
                <td>Part-A</td>
                <td>john@example.com</td>
                <td>john@example.com</td>
                <td>
                  <button className="btn btn-primary">Edit</button>
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <td>2018</td>
                <td>Part-A</td>
                <td>john@example.com</td>
                <td>john@example.com</td>
                <td>
                  <button className="btn btn-primary">Edit</button>
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <td>2018</td>
                <td>Part-A</td>
                <td>john@example.com</td>
                <td>john@example.com</td>
                <td>
                  <button className="btn btn-primary">Edit</button>
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default PastPaper;
