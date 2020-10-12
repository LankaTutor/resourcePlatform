import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CardArticle from "../../Resources/Article/Components/CardArticle";
import Typography from "@material-ui/core/Typography";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SectionTitle from "../../Shared/SectionTitle";
import { Link } from "react-router-dom";
import axios from "axios";

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
function LatestArticle() {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      style={{
        padding: "50px",
      }}
    >
      <Link to="/articles">
        <SectionTitle title="Latest Articles" />
      </Link>

      {/* <Grid container spacing={3}>
        {data.map((dat)=> {
return(
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <CourseCard
              subject={dat.subject}
              subunits={dat.subunits}
              videos={dat.videos}
              img={dat.img}
            />
          </Paper>
        </Grid>)
        })}
      </Grid> */}
    </div>
  );
}

export default LatestArticle;
