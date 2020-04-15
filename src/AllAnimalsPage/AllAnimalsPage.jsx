import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import AnimalList from '../AnimalList/AnimalList';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import ReactGA from 'react-ga';
import Loader from '../Loader/Loader';

export default function CategoryPage() {
   const [data, setData] = useState();
   const history = useHistory();
   const query = new URLSearchParams(history.location.search);
   const page = parseInt(query.get('page'), 10) || 1;

   useEffect(() => {
      ReactGA.pageview(`/animals?page=${page}`);
      setData(null);
      axios.get(`/api/animals/?page=${page}`).then(response => {
         if (response.status === 200) {
            setData(response.data);
         }
      });
   }, [page]);

   const useStyles = makeStyles(theme => ({
      centered: {
         textAlign: 'center'
      }
   }));

   const classes = useStyles();
   let navigation;
   let animals;
   if (data) {
      animals = data.results;
      navigation = {
         count: data.count,
         next: data.next,
         previous: data.previous,
         page
      };
   }

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
         {!data ? (
            <Loader />
         ) : (
            <AnimalList animals={animals} navigation={navigation} />
         )}
      </>
   );
}
