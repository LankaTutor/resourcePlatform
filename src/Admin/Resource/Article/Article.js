import React, { useState } from "react";
import AddArticle from "./Components/AddArticle";
import ViewArticle from "./Components/ViewArticle";
import "./Article.css";

const options = ["Add Articles", "View Articles", "Generate Report"];
function Article() {
  const [showView, setShowView] = useState("View Articles");

  return (
    <div className="article">
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

      <div className="mt-3">
        <p>{showView === "Add Articles" && <AddArticle />}</p>
        <p>{showView === "View Articles" && <ViewArticle />}</p>
      </div>
    </div>
  );
}

export default Article;
