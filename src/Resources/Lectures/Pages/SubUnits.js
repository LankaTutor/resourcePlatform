import React from "react";
import Navbar from "../../../Shared/Navbar/Navbar";
import SubNavbar from "../../../Shared/Navbar/SubNavbar";
import PageHeader from "../../../Shared/PageHeader";
import AllCourses from "../Components/AllCourses";
import SectionTitle from "../../../Shared/SectionTitle";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CourseCard from "../Components/CourseCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
}));
function SubUnit() {
  const classes = useStyles();
  let subject = window.location.href.split("/").pop();
  const mathematics = [{ unit1: "Basic Math" }, { unit2: "Trignometry" }];
  const physics = [
    {
      unit: "1",
      title: "Measurements",
      img:
        "https://ugc.futurelearn.com/uploads/images/3d/d2/header_3dd2e58f-ea83-452d-a280-2ead2ec2bae0.jpg",
      video: "10",
    },
    {
      unit: "2",
      title: "Mechanics",
      img:
        "https://sites.google.com/site/delseaphysics1/_/rsrc/1224176145691/Home/forces/friction/Friction-Lab/Picture%201.png?height=298&width=420",
      video: "10",
    },
    {
      unit: "3",
      title: "Osillation and Waves",
      img:
        "https://lh6.googleusercontent.com/0EkWa6FIOGkZ8Txy8y5pBfSRqGqgS9DN6AUECqViKPwR91vLFH07DXvaGNYfuHgvONwY-dwwNqTebaDaVdQ2WU5m2ElcBxJ3qU7EyzFACn6cJuTCGm07_x2_L_q-DVnKPO9I-3ac",
      video: "10",
    },
    {
      unit: "3",
      title: "Osillation and Waves",
      img:
        "https://lh6.googleusercontent.com/0EkWa6FIOGkZ8Txy8y5pBfSRqGqgS9DN6AUECqViKPwR91vLFH07DXvaGNYfuHgvONwY-dwwNqTebaDaVdQ2WU5m2ElcBxJ3qU7EyzFACn6cJuTCGm07_x2_L_q-DVnKPO9I-3ac",
      video: "10",
    },
    {
      unit: "3",
      title: "Osillation and Waves",
      img:
        "https://lh6.googleusercontent.com/0EkWa6FIOGkZ8Txy8y5pBfSRqGqgS9DN6AUECqViKPwR91vLFH07DXvaGNYfuHgvONwY-dwwNqTebaDaVdQ2WU5m2ElcBxJ3qU7EyzFACn6cJuTCGm07_x2_L_q-DVnKPO9I-3ac",
      video: "10",
    },
  ];
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

        <Grid container spacing={3}>
          {array.map((unit) => {
            return (
              <Grid item xs={6} sm={3}>
                <Paper className={classes.paper}>
                  <CourseCard subject={unit.title} img={unit.img} />
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

export default SubUnit;
