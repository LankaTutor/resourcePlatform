import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    maxWidth: 290,
  },
  media: {
    height: 150,
  },
});

function CourseCard({ subject, img }) {
  const classes = useStyles();
  const url = subject.toLowerCase();
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={img} title={subject} />
          <CardContent>
            <Link to={`/alsubjects/${url}`}>
              <Typography gutterBottom variant="h5" component="h2">
                {subject}
              </Typography>
            </Link>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default CourseCard;
