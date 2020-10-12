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
import SubUnit from "../Pages/SubUnits";
import {useSelector} from 'react-redux';


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

function SubUnitCard({ subject, subunit, unitNo, videos, img }) {
  const isAuth = useSelector((state)=>state.auth.isAuthenticated);
  let url = '';
  isAuth? url=`/alsubjects/${subject}` : url='/login'; 
  const classes = useStyles();

  return (
    <div>
      <Link to={url}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={img} title={subject} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {subunit}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {subject}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Video : {videos}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to="/path">
          <Button className={classes.button1} size="small" >
            Enroll Now
          </Button>
          </Link>
          <Button className={classes.button2} size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      </Link>
    </div>
  );
}

export default SubUnitCard;
