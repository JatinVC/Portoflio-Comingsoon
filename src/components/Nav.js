import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  color: {background: '#2a4158'},
  text:{
      color: '#ebebeb'
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.color}>
        <Toolbar variant="dense">
          <Typography variant="h6" className={classes.text}>
            Jatin Chandwaney
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}