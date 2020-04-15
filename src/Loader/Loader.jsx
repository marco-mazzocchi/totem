import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';

export default function Loader() {
   return (
      <Grid container direction="column" justify="center" alignItems="center">
         <CircularProgress />
      </Grid>
   );
}
