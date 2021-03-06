import React, { useEffect, useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import axios from "axios";
import {useSelector} from 'react-redux';

function ViewPastPaper(props) {
  const [data, setData] = useState([]);
  const isAuth = useSelector((state)=>state.auth.isAuthenticated);
  
  axios.get(`/api/pastpapers/${props.subject}`).then((response) => {
    setData(response.data);
  });

  return (
    <div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Year</th>
            <th scope="col">Subject</th>
            <th scope="col">Language</th>
            <th scope="col">Type</th>
            <th scope="col">Question</th>
            <th scope="col">Answer</th>
            <th scope="col">Edit</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
        {data.length > 0 ? (
          data.map((paper) => (
            <tr key={paper._id}>
              <td>{paper.year}</td>
              <td>{paper.subject}</td>
              <td>{paper.language}</td>
              <td>{paper.type}</td>
              <td>
                <a href={paper.fileUrlQues}>Click to open</a>
              </td>
              <td>
                <a href={paper.fileUrlAns}>Click to open</a>
              </td>
              <td className="text-center">
                <EditIcon />
              </td>
              <td className="text-center">
                <DeleteIcon />
              </td>
            </tr>
          ))):
          (
            <tr>
              <td>No Data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ViewPastPaper;
