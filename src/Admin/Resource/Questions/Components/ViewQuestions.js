import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

function ViewQuestions() {
  return (
    <div style={{ width: "73vw" }}>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Year</th>
            <th scope="col">Subject</th>
            <th scope="col">Language</th>
            <th scope="col">Paper</th>
            <th scope="col">Edit</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>2019</td>
            <td>C-Math</td>
            <td>English</td>
            <td>Paper Link</td>
            <td className="text-center">
              <EditIcon />
            </td>
            <td className="text-center">
              <DeleteIcon />
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>2019</td>
            <td>Physics</td>
            <td>English</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ViewQuestions;
