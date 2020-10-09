import React from "react";
import "./Header.scss";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import { makeStyles } from '@material-ui/core/styles';

import logo from "../../assets/images/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 20px',
    display: 'flex',
    alignItems: 'center',
    width: 550,
    borderRadius: 30,
    border: '2px solid rgba(15, 124, 144, 0.2)',
    background: '#f8f9fa',
    marginLeft:'80px',
    marginTop: '30px',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: 'black',
  },
  iconButton: {
    color: '#636363',
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className="header-container">
      <div className="image">
        <img src="https://image.freepik.com/free-photo/flat-lay-laptop-grey-background_1404-1483.jpg"/>
      </div>
      <div className="header-container__text">
       <div>
        <h1 className="header-text">You are browsing the best resource Platform for G.C.E Advanced Level.</h1>
       </div>
        <div>
          <Paper component="form" className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="Search"
            inputProps={{ 'aria-label': 'search' }}
          />
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
          </Paper>
        </div>
      </div>
    </div>
  );
}
