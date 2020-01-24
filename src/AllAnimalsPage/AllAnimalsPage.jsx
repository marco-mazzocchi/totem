import React, {useState, useEffect} from 'react';
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

    return (<><h1>Tutti gli animali</h1><AnimalList animals={animals} /></>);
}