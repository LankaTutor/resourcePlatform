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
    width: 220,
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

export default function SubNavbar(){
  const isAuth = useSelector((state)=>state.auth.isAuthenticated);
  const classes = useStyles();
 
    return (
      <nav className="navbar navbar-expand-lg navbar-light py-1">
        <div className="container">
            <ButtonGroup className="buttongroup" variant="contained" aria-label="contained primary button group">
              <Button className={classes.margin}>VIDEOS</Button>
              <Button className={classes.margin}>PAST PAPERS</Button>
              <Button className={classes.margin}>EXAM PAPERS</Button>
              <Button className={classes.margin}>QUESTION BANK</Button>
              <Button className={classes.margin}>ARTICLES</Button>
              <Button className={classes.margin}>FORUM</Button>
            </ButtonGroup>
          </div>
      </nav>
    );
}
