import React, { useState } from "react";
import AddQuestions from "./Components/AddQuestions";
import ViewQuestions from "./Components/ViewQuestions";

const options = ["Add Questions", "View Questions"];
function Questions() {
  const [showView, setShowView] = useState("Add Questions");

  return (
    <div className="card_full">
      <div className="card-header text-center">
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
          <p>{showView === "Add Questions" && <AddQuestions />}</p>
          <p>{showView === "View Questions" && <ViewQuestions />}</p>
        </div>
      </div>
    </div>
  );
}

export default Questions;
