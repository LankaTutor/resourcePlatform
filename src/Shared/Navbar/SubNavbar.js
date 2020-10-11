import React from "react";
import {useSelector} from 'react-redux';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import NavigationIcon from '@material-ui/icons/Navigation';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import "./SubNavbar.scss";

const useStyles = makeStyles((theme) => ({
  margin: {
    background: '#015b6b',
    borderRadius: 0,
    color: 'white',
    height: 40,
    width: 263,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(0, 54, 64, .0)',
    '&:hover': {
      background: 'black',
      color:'white',
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function SubNavbar() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const classes = useStyles();

  return (
    <nav className="mb-1 navbar navbar-expand-lg navbar-light py-3" style={{ boxShadow: "0 0 1px 0" }}>
      <div className="container_fluid">
        {/* <a className="navbar-brand" href="/">
          TutorLanka
        </a> */}
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent-4"
          aria-controls="navbarSupportedContent-4"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
          <div className="navbar-nav ml-auto">
          */}
            <ButtonGroup className="buttongroup_fluid" variant="contained" aria-label="contained primary button group">
            <a href="/alsubjects"><Button className={classes.margin}>LECTURES</Button></a>
            <a href="/pastpapers"><Button className={classes.margin}>PAST PAPERS</Button></a>
            <a href="/exampapers"><Button className={classes.margin}>EXAM PAPERS</Button></a>
            {/* <a href="/shortnotes"><Button className={classes.margin}>SHORT NOTES</Button></a>
            <a href="/questionbank"><Button className={classes.margin}>QUESTION BANK</Button></a> */}
            <a href="/articles"><Button className={classes.margin}>ARTICLES</Button></a>
            <a href="/forum"><Button className={classes.margin}>FORUM</Button></a>
            </ButtonGroup>
        </div>
      </nav>
    );        
}
