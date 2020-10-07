import React, { useState, useEffect } from "react";
import AddPastPaperAnswer from "./AddPastPaperAnswer";
import ViewPastPaper from "./ViewPastPaper";
// import ViewExampaper from "./Components/ViewExampaper";

const options = ["Add Past papers", "View Past papers"];
function MathPastPaper(props) {
  const [showView, setShowView] = useState("View Past papers");

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
          <p>{showView === "Add Past papers" && <AddPastPaperAnswer subject={props.subject}/>}</p>
          <p>{showView === "View Past papers" && <ViewPastPaper subject={props.subject}/>}</p>
        </div>
      </div>
    </div>
  );
}

export default MathPastPaper;
