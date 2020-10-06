import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CardArticle from "../../Resources/Article/Components/CardArticle";
import Typography from "@material-ui/core/Typography";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SectionTitle from "../../Shared/SectionTitle";

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
      <SectionTitle title="Latest Article" icon="fas fa-book" />

      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <CardArticle
              subject="Math"
              img="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
            />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <CardArticle
              subject="Math"
              img="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
            />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <CardArticle
              subject="Math"
              img="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
            />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <CardArticle
              subject="Math"
              img="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default LatestArticle;
