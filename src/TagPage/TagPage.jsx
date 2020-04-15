import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AnimalList from '../AnimalList/AnimalList';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AppContext from '../AppContext';
import ReactGA from 'react-ga';
import Loader from '../Loader/Loader';

export default function CategoryPage() {
   const { id } = useParams();
   const [data, setData] = useState();
   const history = useHistory();
   const appContext = useContext(AppContext);
   const query = new URLSearchParams(history.location.search);
   const page = parseInt(query.get('page'), 10) || 1;
   const tag = appContext.tags.find(tag => tag.id === parseInt(id));
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
         <h1>{tag && tag.name}</h1>
         {!data ? (
            <Loader />
         ) : (
            <AnimalList animals={animals} navigation={navigation} />
         )}
      </>
   );
}
