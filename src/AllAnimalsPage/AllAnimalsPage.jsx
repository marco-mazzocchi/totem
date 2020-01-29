import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import AnimalList from '../AnimalList/AnimalList';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import ReactGA from 'react-ga';

export default function CategoryPage() {
   const [animals, setAnimals] = useState([]);
   useEffect(() => {
      ReactGA.pageview('/animals');
      axios.get(`/api/animals/`).then(response => {
         if (response.status === 200) {
            setAnimals(response.data.results);
         }
      });
   }, []);

   const useStyles = makeStyles(theme => ({
      centered: {
         textAlign: 'center'
      }
   }));

   const classes = useStyles();

   return (
      <>
         <Typography
            variant="h4"
            gutterBottom
            color="textPrimary"
            className={classes.centered}
         >
            Tutti gli animali
         </Typography>
         <AnimalList animals={animals} />
      </>
   );
}
