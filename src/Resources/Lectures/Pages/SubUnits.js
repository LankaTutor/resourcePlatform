import React from "react";
import Navbar from "../../../Shared/Navbar/Navbar";
import SubNavbar from "../../../Shared/Navbar/SubNavbar";
import PageHeader from "../../../Shared/PageHeader";
import AllCourses from "../Components/AllCourses";
import SectionTitle from "../../../Shared/SectionTitle";
function SubUnit() {
  let subject = window.location.href.split("/").pop();
  const mathematics = [{ unit1: "Basic Math" }, { unit2: "Trignometry" }];
  const physics = [{ unit1: "Mechanics" }, { unit2: "Light" }];
  let array = [];
  if (subject == "mathematics") {
    array = mathematics;
  } else if (subject == "physics") {
    array = physics;
  }
  return (
    <div>
      <Navbar />
      <SubNavbar />
      <PageHeader title={subject} />
      <div
        style={{
          padding: "50px",
        }}
      >
        <SectionTitle title={subject} icon="fas fa-book" />

        {array.map((unit) => {
          return <p>{unit.unit1}</p>;
        })}
      </div>
    </div>
  );
}

export default SubUnit;
