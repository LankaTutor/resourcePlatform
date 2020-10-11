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
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <CardArticle
              title="Trignometry - A Deep Dive"
              author="Dilushkumar"
              avatar="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
              description="Trigonometry is a branch of mathematics that studies relationships between side lengths and angles of triangles"
              img="https://i.ytimg.com/vi/PUB0TaZ7bhA/hqdefault.jpg"
            />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <CardArticle
              title="Chemistry of Future World"
              author="Mayurathan"
              avatar="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
              description="Quantum chemistry, also called molecular quantum mechanics, is a branch of chemistry focused on the application of quantum mechanics in physical models and experiments of chemical systems."
              img="https://d1aueex22ha5si.cloudfront.net/Conference/902/Highlight/14.%20Quantum%20Chemistry-1584599077703.png"
            />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <CardArticle
              title="Quantum Physics"
              author="Anojiya"
              avatar="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png"
              description="Quantum mechanics is a fundamental theory in physics that provides a description of the physical properties of nature at the scale of atoms and subatomic particles."
              img="https://upload.wikimedia.org/wikipedia/commons/e/e7/Hydrogen_Density_Plots.png"
            />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <CardArticle
              title="Biology of Gene"
              author="Yathurshan"
              avatar="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
              description="In biology, a gene is a sequence of nucleotides in DNA or RNA that encodes the synthesis of a gene product, either RNA or protein. During gene expression, the DNA is first copied into RNA. "
              img="https://medlineplus.gov/images/PX00006G_PRESENTATION.jpeg"
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default LatestArticle;
