import React, { useState, useEffect, useContext } from 'react';
import AnimalList from '../AnimalList/AnimalList';
import { Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AppContext from '../AppContext';

export default function CategoryPage() {
   const { id } = useParams();
   const [animals, setAnimals] = useState([]);
   const appContext = useContext(AppContext);
   const category = appContext.categories.find(
      category => category.id === parseInt(id)
   );
   useEffect(() => {
      axios.get(`/api/animals/?category=${id}`).then(response => {
         if (response.status === 200) {
            setAnimals(response.data.results);
         }
      });
   }, [id]);

   return (
      <>
         <Typography variant="h4" gutterBottom color="textPrimary">
            {category && category.name}
         </Typography>
         <AnimalList animals={animals} />
      </>
   );
}
