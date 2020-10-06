import React, { useState } from "react";
import AddQuestions from "./Components/AddQuestions";
import ViewQuestions from "./Components/ViewQuestions";

const options = ["Add Questions", "View Questions", "Generate Report"];
function Questions() {
  const [showView, setShowView] = useState("View Questions");

  return (
    <div className="card">
      <div className="card-header text-center">
        <div className="btn-group" role="group" aria-label="Basic example">
          {options.map((option) => {
            return (
              <button
                type="button"
                className="btn btn-secondary mr-2"
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
          <p>{showView === "Add Questions" && <AddQuestions />}</p>
          <p>{showView === "View Questions" && <ViewQuestions />}</p>
        </div>
      </div>
    </div>
  );
}

export default Questions;
