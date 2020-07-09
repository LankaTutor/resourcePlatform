import React from "react";
import "./PageHeader.scss";

export default function ForumHeader(props) {
  return (
    <div className="page-header">
      <div className="page-header__text">
        <h3>{props.title}</h3>
        <h5>{props.subTitle}</h5>
      </div>
      <div className="pageheader-container__overlay"></div>
    </div>
  );
}
