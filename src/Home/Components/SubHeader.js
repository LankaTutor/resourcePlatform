import React from "react";
import "./SubHeader.scss";
export default function SubHeader() {
  return (
    <div className="sub-header pt-3">
      <div>
        <h5>Subscribe to Our Learning Platform</h5>
        <h6>Learn thoruh our Premium video Content at Affordable price</h6>
        <div className="sub-header__buttons">
          <div className="btn btn-danger mt-2">Learning Platform</div>
        </div>
      </div>
    </div>
  );
}
