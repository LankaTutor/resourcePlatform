import React, { useState, useEffect } from "react";
import AddExamPaper from "./Components/AddArticle";
import ViewExampaper from "./Components/ViewArticle";

const options = ["Add Articles", "View Articles"];
function Article() {
  const [showView, setShowView] = useState("Add Articles");

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
      {/* <div className="card-body">
        <div className="mt-3">
          <p>{showView === "Add Articles" && <AddArticle />}</p>
          <p>{showView === "View Articles" && <ViewArticle />}</p>
        </div>
      </div> */}
    </div>
  );
}

export default Article;
