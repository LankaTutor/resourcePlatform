import React, { useState } from "react";
import AddLecture from "./Components/AddLecture";
import ViewLectures from "./Components/ViewLectures.js";

const options = ["Add Video", "View Videos"];
function Lectures() {
  const [showView, setShowView] = useState("Add Lecture");

  return (
    <div className="card">
      <div className="card-header">
        <div className="btn-group" role="group" aria-label="Basic example">
          {options.map((option) => {
            return (
              <button
                style={{ backgroundColor: "#7B241C", color: "#fff" }}
                className="btn mr-2"
                variant="contained"
                onClick={() => setShowView(option)}
              >
                {option}
              </button>
            );
          })}
        </div>
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
