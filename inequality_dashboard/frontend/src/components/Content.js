import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  },
}));

export default function Content() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>
        <Grid item sm={6}>
        <p>TEST TESTr</p>
        </Grid>
        <Grid item sm={6}>
        <p>TEST TESTd</p>
        </Grid>
        <Grid item sm={12}>
        <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
          <p>TEST TEST</p>
        </Grid>
    </Grid>
  );
}
