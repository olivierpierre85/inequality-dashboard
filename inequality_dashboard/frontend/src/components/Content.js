import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Route, Router, Switch } from "react-router-dom";
import Introduction from './Introduction';
import DemoChart from './DemoChart';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    
    borderRadius: "6px",
    boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    backgroundColor: "white",

    [theme.breakpoints.down('sm')]: {
      margin: "-60px 5px 0px",
    },
    [theme.breakpoints.up('md')]: {
      margin: "-60px 20px 0px",
    },
    [theme.breakpoints.up('lg')]: {
      margin: "-60px 30px 0px",
    },
  },
}));

export default function Content() {
  const classes = useStyles();

  return (
    <div className={classes.root}>      
      <Switch>
          <Route exact path="/" render={(props) => <Introduction></Introduction>} />
          <Route exact path="/demo" render={(props) => <DemoChart></DemoChart>} />
      </Switch>
    </div>
  );
}
