import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CardArticle from "./CardArticle";
import Typography from "@material-ui/core/Typography";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SectionTitle from "../../../Shared/SectionTitle";

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
function Articles() {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      style={{
        padding: "50px",
      }}
    >
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

export default Articles;

// import React, { Component } from "react";

// import "./Articles.scss";
// import CardArticle from "../../Article/Components/CardArticle";

// const Articles = (props) => {
//   const ARTICLES = [
//     {
//       id: "a1",
//       image:
//         "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//       title: "Science behind PI",
//       description: "Everything you need to know about PI",
//       category: "Mathematics",
//       author: {
//         img:
//           "https://images.pexels.com/photos/734168/pexels-photo-734168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//         name: "Sat Mern",
//       },
//     },
//     {
//       id: "a1",
//       image:
//         "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//       title: "Science behind PI",
//       description: "Everything you need to know about PI",
//       category: "Physics",
//       author: {
//         img:
//           "https://images.pexels.com/photos/7370/startup-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//         name: "Dan Brown",
//       },
//     },
//     {
//       id: "a1",
//       image:
//         "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//       title: "Science behind PI",
//       description:
//         "Everything you need to know about PI Everything you need to know about PI",
//       category: "Mathematics",
//       author: {
//         img:
//           "https://images.pexels.com/photos/734168/pexels-photo-734168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//         name: "Sat Mern",
//       },
//     },
//     {
//       id: "a1",
//       image:
//         "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//       title: "Science behind PI",
//       description: "Everything you need to know about PI",
//       category: "Physics",
//       author: {
//         img:
//           "https://images.pexels.com/photos/7370/startup-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//         name: "Dan Brown",
//       },
//     },
//     {
//       id: "a1",
//       image:
//         "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//       title: "Science behind PI",
//       description: "Everything you need to know about PI",
//       category: "Mathematics",
//       author: {
//         img:
//           "https://images.pexels.com/photos/734168/pexels-photo-734168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//         name: "Sat Mern",
//       },
//     },
//   ];
//   return (
//     <div className="my-5">
//       <div className="articles mt-5">
//         {ARTICLES.map((article) => {
//           return <CardArticle article={article} />;
//         })}
//       </div>
//     </div>
//   );
// };

// export default Articles;
