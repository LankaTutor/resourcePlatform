import React, { useState } from "react";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from '@material-ui/core/Collapse';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ForumIcon from '@material-ui/icons/Forum';
import SettingsIcon from '@material-ui/icons/Settings';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import "./MentorSidebar.css";


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));

  
function MentorSidebar() {

  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

    return (
      <div className="studentSidebar">
        <div className="studentSidebar__avatar">
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSq7kZ4qPLBXUSDFsH2g5rQY9xAUYSpdbmWw&usqp=CAU"
            className={classes.large}
          />
        </div>
        <div className="avatar_name" ><h6>Mentor 01</h6></div>
        <Divider />
         <List style={{ color: "#ededed" }}>
         <ListItem button>
            <ListItemIcon >
              <HomeIcon style={{ color: "#ededed" }} />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
         <ListItem button>
            <ListItemIcon>
              <ForumIcon style={{ color: "#ededed" }}/>
            </ListItemIcon>
            <Link to="/mentorDashboard/article"  style={{ textDecoration: "none", color: "#ffffff" }}>
              <ListItemText primary="Articles" /></Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ForumIcon style={{ color: "#ededed" }}/>
            </ListItemIcon>
            <ListItemText primary="Forum" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <TrendingUpIcon style={{ color: "#ededed" }}/>
            </ListItemIcon>
            <ListItemText primary="Answers" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon style={{ color: "#ededed" }}/>
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
         </List>
      </div>
    );   
}

export default MentorSidebar;