import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CourseCard from "./CourseCard";
import Typography from "@material-ui/core/Typography";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SectionTitle from "../../../Shared/SectionTitle";
import SubjectCard from "./SubjectCard";
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
function AllCourses() {
  const classes = useStyles();
  const subjects = [
    {
      subject: "Biology",
      img: "https://debrabell.com/wp-content/uploads/2017/03/Biology.jpg",
    },
    {
      subject: "Mathematics",
      img:
        "https://us.123rf.com/450wm/sn333g/sn333g1803/sn333g180300019/96670673-mathematics-circular-flat-illustration-with-math-symbol-.jpg?ver=6",
    },
    {
      subject: "Physics",
      img:
        "https://www.newsdotcom.com/wp-content/uploads/2020/04/physics-696x373-1.jpg",
    },
    {
      subject: "Chemistry",
      img:
        "https://www.newsdotcom.com/wp-content/uploads/2020/04/physics-696x373-1.jpg",
    },
  ];
  return (
    <div
      className={classes.root}
      style={{
        padding: "50px",
      }}
    >
      <SectionTitle title="Alevel Subjects" icon="fas fa-book" />

      <Grid container spacing={3}>
        {subjects.map((subject) => {
          return (
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>
                <SubjectCard subject={subject.subject} img={subject.img} />
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default AllCourses;
