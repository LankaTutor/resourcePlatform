import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 290,
  },
  media: {
    height: 150,
  },
  button1: {
    border: '2px solid rgba(63, 81, 181, 0.8)',
    background:'#3f51b5',
    color: 'white',
    '&:hover':{
      color:'#3f51b5',
    },
    paddingRight: '10px',
    paddingLeft: '10px',
    marginRight:'20px',
    marginBottom: '10px',
  },
});

function CourseCard({ subject, unit, video, img }) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={img} title={subject} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {subject}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              There are {unit} sub units and {video} video lectures available{" "}
              for {subject}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button className={classes.button1} size="small" >
            Enroll Now
          </Button>
          <Button className={classes.button2} size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default CourseCard;
