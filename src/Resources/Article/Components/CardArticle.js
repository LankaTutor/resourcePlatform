import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 290,
  },
  media: {
    height: 150,
  },
});

function CardArticle({ title, description, img, author, avatar }) {
  const classes = useStyles();

  return (
    <div>
      <Link to={`/articles/${title}`}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={img} title={title} />
          <CardActions>
            <Button size="small" color="primary">
              <Avatar alt={author} src={avatar} />
            </Button>
            <Button size="small" color="primary">
              {author}
            </Button>
          </CardActions>
          <Divider />
          <CardContent>
            <Typography gutterBottom variant="body1" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
    </div>
  );
}

export default CardArticle;
