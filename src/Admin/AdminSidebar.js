import React, { useState } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import LaptopChromebookIcon from "@material-ui/icons/LaptopChromebook";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import PersonIcon from "@material-ui/icons/Person";
import NoteIcon from "@material-ui/icons/Note";
import DateRangeIcon from "@material-ui/icons/DateRange";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import DescriptionIcon from "@material-ui/icons/Description";
import BookIcon from "@material-ui/icons/Book";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { makeStyles } from '@material-ui/core/styles';

import "./AdminSidebar.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));

function AdminSidebar() {
  const classes = useStyles();
  return (
    <div className="adminSidebar">
      <div className="adminSidebar__avatar">
        <Avatar
          className={classes.large}
          alt="Remy Sharp"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSq7kZ4qPLBXUSDFsH2g5rQY9xAUYSpdbmWw&usqp=CAU"
        />
      </div>
      <div className="avatar_name"><h6>Sivarasa Sivapriyan</h6></div>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <LaptopChromebookIcon style={{ color: "#ffffff" }} />
          </ListItemIcon>
          <Link
            to="/admin/lectures"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            <ListItemText primary="Lectures" />
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DateRangeIcon style={{ color: "#ffffff" }} />
          </ListItemIcon>
          <Link
            to="/admin/pastpapers"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            <ListItemText primary="Past Papers" />
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BookIcon style={{ color: "#ffffff" }} />
          </ListItemIcon>
          <Link
            to="/admin/exampapers"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            <ListItemText primary="Exam Papers" />
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <QuestionAnswerIcon style={{ color: "#ffffff" }} />
          </ListItemIcon>
          <Link
            to="/admin/questions"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            <ListItemText primary="Questions" />
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DescriptionIcon style={{ color: "#ffffff" }} />
          </ListItemIcon>
          <Link
            to="/admin/resource-management"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            <ListItemText primary="Articles" />
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <NoteIcon style={{ color: "#ffffff" }} />
          </ListItemIcon>
          <Link
            to="/admin/resource-management"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            <ListItemText primary="Short Notes" />
          </Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button className="btnSidebar">
          <ListItemIcon style={{ color: "#ffffff" }}>
            <SupervisorAccountIcon />
          </ListItemIcon>
          <Link
            to="/admin/resource-management"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            <ListItemText primary="Mentors" />
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PersonIcon style={{ color: "#ffffff" }} />
          </ListItemIcon>
          <Link
            to="/admin/resource-management"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            <ListItemText primary="Students" />
          </Link>
        </ListItem>
      </List>

      <Divider />
      <List>
        <ListItem button className="btnSidebar">
          <ListItemIcon style={{ color: "#ffffff" }}>
            <SettingsIcon />
          </ListItemIcon>
          <Link
            to="/admin/resource-management"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            <ListItemText primary="Settings" />
          </Link>
        </ListItem>
        <ListItem button className="btnSidebar">
          <ListItemIcon style={{ color: "#ffffff" }}>
            <ExitToAppIcon />
          </ListItemIcon>
          <Link
            to="/admin/resource-management"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            <ListItemText primary="Logout" />
          </Link>
        </ListItem>
      </List>
    </div>
  );
}

export default AdminSidebar;
