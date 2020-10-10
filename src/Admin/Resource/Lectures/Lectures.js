import React, { useState } from "react";
import AddLecture from "./Components/AddLecture";
import ViewLectures from "./Components/ViewLectures.js";
import { makeStyles } from '@material-ui/core/styles';
import "./Lectures.css";

const options = ["Add Lecture", "View Lectures"];


function Lectures() {
  const [showView, setShowView] = useState("Add Lecture");

  return (
    <div className="card_full">
      <div className="card-header">
          {options.map((option) => {
            return (
              <button
                style={{ backgroundColor: "#db591f", color: "#fff" }}
                className="btn mr-5"
                variant="contained"
                onClick={() => setShowView(option)}
               >
                {option}
              </button>
            );
          })}
       </div>
      <div className="card-body">
        <div className="mt-5">
          <p>{showView === "Add Lecture" && <AddLecture />}</p>
          <p>{showView === "View Lectures" && <ViewLectures />}</p>
        </div>
      </div>
    </div>
  );
}

export default Lectures;
