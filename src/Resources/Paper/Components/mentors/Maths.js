import React, { Component } from "react";
import { BrowserRouter as Router ,Route, Switch} from "react-router-dom";

import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import axios from "axios";
import AddPastPaperAnswer from './AddPastPaperAnswer';
import $ from "jquery";



$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});


class MathsPaper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subject: this.props.subject,
      medium: this.props.medium,
      longText: "Click here to view",
      data: [],
      editData: [],
    };
  }
  

  componentDidMount() {
    this.getAll();
  }

  getAll() {
    axios.get("/api/resources/pastpapers/").then((res) => {
      this.setState({
        data: res.data,
      });
    });
  }

  
  // addAnswer = () => {
  //   return (
  //     <Router>
  //       <Route>
  //         <AddPastPaperAnswer/>
  //       </Route>
  //     </Router>
  //   )
  // }
  

  render() {
    const { subject, medium, longText, data } = this.state;
    return (
      <Router>
      <div>
        <br />
        <div>
          <h2>Available {subject} Past Papers </h2>
          <input
            className="form-control"
            id="myInput"
            type="text"
            placeholder="Search By Year.."
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
                <th>Add</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody id="myTable">
              {data.length > 0 ? (
                data.map((e) => (
                  <tr key={e._id}>
                    <td>{e.year}</td>
                    <td>{e.type}</td>
                    <td>
                      <Tooltip title={longText}>
                        <Button href="*">
                          {medium == "tamil"
                            ? "வினாத்தாள்"
                            : medium == "sinhala"
                            ? "ප්‍රශ්න පත්‍රය"
                            : "Question Paper"}
                        </Button>
                      </Tooltip>
                    </td>
                    <td>
                      <Tooltip title={longText}>
                        <Button href="*">
                          {medium == "tamil"
                            ? "விடைத்தாள்"
                            : medium == "sinhala"
                            ? "පිළිතුරු පත්‍රය"
                            : "Answer Paper"}
                        </Button>
                      </Tooltip>
                    </td>
                    <td>
                      <Tooltip title="Add Answer">
                        
                        <IconButton
                          aria-label="add"
                          style={{ backgroundColor: "#2EC3F4" }}
                          href="/pastpapers/Mathematics/addAnswer"
                         // onClick={this.addAnswer}
                        >
                          <AddIcon />
                        </IconButton>
                      </Tooltip>
                    </td>
                    <td>
                      <Tooltip title="Edit">
                        <IconButton
                          aria-label="edit"
                          style={{ backgroundColor: "#20EE9D" }}
                        >
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                    </td>
                    <td>
                      <Tooltip title="Delete">
                        <IconButton
                          aria-label="delete"
                          style={{ backgroundColor: "#EE4620" }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>No Data</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      </Router>
    );
  }
}

export default MathsPaper;
