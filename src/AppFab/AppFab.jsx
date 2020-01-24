import React from 'react';
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import SearchIcon from '@material-ui/icons/Search';

export default function AppFab() {

    const history = useHistory();

  const handleFabClick = () => {
    history.push('/');
  };

  const useStyles = makeStyles(theme => ({
    fab: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      zIndex: 10
    }
  }));

  const classes = useStyles();

    return (
        <Fab color="secondary" onClick={handleFabClick} className={classes.fab} aria-label="Cerca">
          <SearchIcon />
        </Fab>
    );

}