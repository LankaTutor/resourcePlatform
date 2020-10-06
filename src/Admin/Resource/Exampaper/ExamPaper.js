import React, { useState, useEffect } from "react";
import AddExamPaper from "./Components/AddExamPaper";
import ViewExampaper from "./Components/ViewExampaper";

const options = ["Add Exam papers", "View Exam papers", "Generate Report"];
function ExamPaper() {
  const [showView, setShowView] = useState("View Exam papers");

  return (
    <div className="card">
      <div className="card-header">
        <div className="btn-group" role="group" aria-label="Basic example">
          {options.map((option) => {
            return (
              <button
                type="button"
                className="btn btn-danger mr-2"
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
