import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CourseCard from "./CourseCard";
import Typography from "@material-ui/core/Typography";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SectionTitle from "../../../Shared/SectionTitle";
import { Link } from "react-router-dom";
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
  return (
    <div
      className={classes.root}
      style={{
        padding: "50px",
      }}
    >
      <Link to="/alsubjects">
        <SectionTitle title="Alevel Subjects" icon="fas fa-book" />
      </Link>

      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <CourseCard
              subject="Biology"
              unit="10"
              video="20"
              img="https://debrabell.com/wp-content/uploads/2017/03/Biology.jpg"
            />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <CourseCard
              subject="Mathematics"
              unit="10"
              video="20"
              img="https://us.123rf.com/450wm/sn333g/sn333g1803/sn333g180300019/96670673-mathematics-circular-flat-illustration-with-math-symbol-.jpg?ver=6"
            />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <CourseCard
              subject="Physics"
              unit="10"
              video="20"
              img="https://www.newsdotcom.com/wp-content/uploads/2020/04/physics-696x373-1.jpg"
            />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <CourseCard
              subject="Chemistry"
              unit="10"
              video="20"
              img="https://thumbs.dreamstime.com/b/chemistry-round-colorful-illustration-vector-science-education-symbol-made-word-chemical-icons-90137310.jpg"
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default AllCourses;
