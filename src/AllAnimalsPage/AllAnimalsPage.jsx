import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import AnimalList from '../AnimalList/AnimalList';
import axios from 'axios';

export default function CategoryPage() {
   const [animals, setAnimals] = useState([]);
   useEffect(() => {
      axios.get(`/api/animals/`).then(response => {
         if (response.status === 200) {
            setAnimals(response.data.results);
         }
      });
   }, []);

   return (
      <>
         <Typography variant="h4" gutterBottom color="textPrimary">
            Tutti gli animali
         </Typography>
         <AnimalList animals={animals} />
      </>
   );
}
