import React, { useState } from "react";
import AddPastPaper from "./Components/AddPastPaper";
import ViewPastpaper from "./Components/ViewPastpaper";
import "./Pastpaper.css";

const options = ["Add Past papers", "View Past papers"];
function PastPaper() {
  const [showView, setShowView] = useState("Add Past papers");

  return (
    <div className="card_full pastpaper">
      <div className="card-header text-center" style={{ alignItems: "center", display: "flex", justifyContent: "center"}}>
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
          <p>{showView === "Add Past papers" && <AddPastPaper />}</p>
          <p>{showView === "View Past papers" && <ViewPastpaper />}</p>
        </div>
      </div>
    </div>
  );
}

export default PastPaper;
