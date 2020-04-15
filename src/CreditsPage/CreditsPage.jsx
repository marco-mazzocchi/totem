import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
   paper: {
      padding: theme.spacing(4)
   }
}));

export default function CreditsPage() {
   const classes = useStyles();
   return (
      <Paper className={classes.paper}>
         <Typography variant="h5" gutterBottom>
            Credits
         </Typography>
         <Typography paragraph>
            Un grandissimo grazie per aver sostenuto e collaborato al progretto
            a:
         </Typography>
         <ul>
            <li>Claudio Campioni</li>
            <li>Tommaso Groppi</li>
         </ul>
      </Paper>
   );
}
