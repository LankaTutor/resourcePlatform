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
import MenuBookIcon from '@material-ui/icons/MenuBook';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ForumIcon from '@material-ui/icons/Forum';
import SettingsIcon from '@material-ui/icons/Settings';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import "./StudentSidebar.css";


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
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));

  
function StudentSidebar() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

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
          <h6 className="name">Admin One</h6>
        </div>
        <Divider />
         <List style={{ color: "#ededed" }}>
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <MenuIcon style={{ color: "#ededed" }} />
            </ListItemIcon>
            <ListItemText primary="Courses" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <MenuBookIcon style={{ color: "#ededed" }}/>
                  </ListItemIcon>
                  <ListItemText primary="Com. Maths" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <MenuBookIcon style={{ color: "#ededed" }}/>
                  </ListItemIcon>
                  <ListItemText primary="Physics" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <MenuBookIcon style={{ color: "#ededed" }}/>
                  </ListItemIcon>
                  <ListItemText primary="IT" />
                </ListItem>
              </List>
            </Collapse>
          <ListItem button>
            <ListItemIcon>
              <TrendingUpIcon style={{ color: "#ededed" }}/>
            </ListItemIcon>
            <ListItemText primary="Rewards" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ForumIcon style={{ color: "#ededed" }}/>
            </ListItemIcon>
            <ListItemText primary="Forum" />
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

export default StudentSidebar;