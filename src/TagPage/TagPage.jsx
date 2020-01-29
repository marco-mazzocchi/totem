import React, { useState, useEffect, useContext } from 'react';
import AnimalList from '../AnimalList/AnimalList';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AppContext from '../AppContext';
import ReactGA from 'react-ga';

export default function CategoryPage() {
   const { id } = useParams();
   const [animals, setAnimals] = useState([]);
   const appContext = useContext(AppContext);
   const tag = appContext.tags.find(tag => tag.id === parseInt(id));
   useEffect(() => {
      ReactGA.pageview(`/animals/?tags=${id}`);
      axios.get(`/api/animals/?tags=${id}`).then(response => {
         if (response.status === 200) {
            setAnimals(response.data.results);
         }
      });
   }, [id]);

   return (
      <>
         <h1>{tag && tag.name}</h1>
         <AnimalList animals={animals} />
      </>
   );
}
