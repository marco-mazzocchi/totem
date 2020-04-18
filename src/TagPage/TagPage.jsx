import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AnimalList from '../AnimalList/AnimalList';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AppContext from '../AppContext';
import ReactGA from 'react-ga';
import Loader from '../Loader/Loader';

const useStyles = makeStyles(theme => ({
   centered: {
      textAlign: 'center'
   }
}));

export default function CategoryPage() {
   const { id } = useParams();
   const [data, setData] = useState();
   const history = useHistory();
   const appContext = useContext(AppContext);
   const query = new URLSearchParams(history.location.search);
   const page = parseInt(query.get('page'), 10) || 1;
   const tag = appContext.tags.find(tag => tag.id === parseInt(id));
   const classes = useStyles();

   useEffect(() => {
      ReactGA.pageview(`/animals/?tags=${id}&page=${page}`);
      setData(null);
      axios.get(`/api/animals/?tags=${id}&page=${page}`).then(response => {
         if (response.status === 200) {
            setData(response.data);
         }
      });
   }, [id, page]);

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
            {tag && tag.name}
         </Typography>
         {!data ? (
            <Loader />
         ) : (
            <AnimalList animals={animals} navigation={navigation} />
         )}
      </>
   );
}
