import React, { useState, useEffect } from "react";
import AddExamPaper from "./Components/AddExamPaper";
import ViewExampaper from "./Components/ViewExampaper";

const options = ["Add Exam papers", "View Exam papers"];
function ExamPaper() {
  const [showView, setShowView] = useState("Add Exam papers");

  return (
    <div className="card_full">
      <div className="card-header" style={{ alignItems: "center", display: "flex", justifyContent: "center"}}>
        <div className="btn-group" role="group" aria-label="Basic example">
          {options.map((option) => {
            return (
              <button
                type="button"
                style={{ backgroundColor: "#db591f", color: "#fff" }}
                className="btn mr-5"
                onClick={() => setShowView(option)}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
      <div className="card-body">
        <div className="mt-3">
          <p>{showView === "Add Exam papers" && <AddExamPaper />}</p>
          <p>{showView === "View Exam papers" && <ViewExampaper />}</p>
        </div>
      </div>
    </div>
  );
}

export default ExamPaper;
