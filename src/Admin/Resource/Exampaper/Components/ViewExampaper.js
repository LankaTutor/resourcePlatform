import React, { useEffect, useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import axios from "axios";

function ViewExampaper() {
  const [data, setData] = useState([]);
  axios.get("/api/resources/exampapers").then((response) => {
    setData(response.data);
  });

  return (
    <div style={{ width: "73vw" }}>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Exam</th>
            <th scope="col">School</th>
            <th scope="col">Subject</th>
            <th scope="col">Language</th>
            <th scope="col">Year</th>
            <th scope="col">Paper</th>
            <th scope="col">Edit</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {data.map((exam) => (
            <tr>
              <td>{exam.name}</td>
              <td>{exam.school}</td>
              <td>{exam.subject}</td>
              <td>{exam.language}</td>
              <td>{exam.year}</td>
              <td>
                <a href={exam.fileUrl}>Click to open</a>
              </td>
              <td className="text-center">
                <EditIcon />
              </td>
              <td className="text-center">
                <DeleteIcon />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewExampaper;
