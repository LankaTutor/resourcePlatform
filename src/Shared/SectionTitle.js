import React from "react";
import "./SectionTitle.scss";
const SectionTitle = (props) => {
  return (
    <div className="section-title">
      <i className={props.icon}></i>
      <h4 className="section-title__heading">{props.title}</h4>
    </div>
  );
};

export default SectionTitle;
