import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Chip, Button, TextField, MenuItem, Typography, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
import AnimalList from '../AnimalList/AnimalList';
import AppContext from '../AppContext';

export default function SearchPage() {

    const appContext = useContext(AppContext);
    const [tags, setTags] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filteredAnimals, setFilteredAnimals] = useState([]);
    const [searchFilter, setSearchFilter] = useState({});
    const [animalName, setAnimalName] = useState('');
    const [category, setCategory] = useState('');
    const [showForm, setShowForm] = useState(true);

    useEffect(() => {
        if (Object.keys(searchFilter).length) {
            axios.get('/api/animals/', { params: searchFilter}).then(response => {
                if (response.status === 200) {
                    setFilteredAnimals(response.data.results);
                }
            }); 
        }
    }, [searchFilter]);

    useEffect(() => {

        const tags = appContext.tags.map(tag => ({
                    id: tag.id,
                    name: tag.name,
                    selected: false
                }));
        setTags(tags);

        const categories = appContext.categories.map(category => ({
                        id: category.id,
                        name: category.name
                    }));
        setCategories(categories);

    }, [appContext.tags, appContext.categories]);

    const toggleTagSelection = (index) => {
        const newTagList = [...tags];
        newTagList[index] = { ...newTagList[index], selected: !newTagList[index].selected};
        setTags(newTagList);
    };

    const submitSearch = (e) => {
        e.preventDefault();
        let selectedFilters = {};
        const selectedTags = tags.filter(tag => tag.selected);
        if(selectedTags.length) {
            selectedFilters.tags = selectedTags.reduce((acc, tag) => {
                acc.push(tag.id);                
                return acc;
            }, []).join(',');
        }
        if(animalName !== '') {
            selectedFilters.name = animalName; 
        }
        if (category !== '') {
            selectedFilters.category = category;
        }
        setSearchFilter(selectedFilters);
        setShowForm(false);
    };

    const useStyles = makeStyles(theme => ({
        tags: {
            marginBottom: theme.spacing(2)
        },
        tagList: {
            maxHeight: theme.spacing(24),
            overflowY: 'auto',
            overflowX: 'hidden'
        },
        chip: {
            margin: theme.spacing(1)
        },
        container: {
            maxHeight: showForm ? '1200px' : 0,
            overflowY: 'hidden',
            transition: 'max-height .5s cubic-bezier(0, 1, 0.5, 1)'
        }
    }));

    const classes = useStyles();

    const tagChips = tags.map((tag, index) => {
        const color = tag.selected ? 'primary' : 'default';
        return <Chip
            key={tag.id} 
            label={tag.name} 
            color={color} 
            onClick={toggleTagSelection.bind(this, index)} 
            className={classes.chip}
            />
    });

    return (
        <>
            <Typography variant="h4" gutterBottom color='textPrimary'>
            Ricerca un animale
            </Typography>
            <form className={classes.container} noValidate autoComplete="off" onSubmit={submitSearch}>
                <TextField
                    id="name-filter"
                    label="Nome"
                    fullWidth={true}
                    margin="normal"
                    value={animalName}
                    placeholder="Digita una chiave di ricerca"
                    onChange={(e) => {
                        setAnimalName(e.target.value);
                    }}
                />
                <TextField
                    id="category-filter"
                    select
                    fullWidth={true}
                    label="Categoria"
                    margin="normal"
                    value={category}
                    onChange={(e) => {
                        setCategory(e.target.value);
                    }}
                >
                    {categories.map(option => {
                        const selected = category === option.id;
                        return (
                            <MenuItem key={option.id} value={option.id} selected={selected}>
                            {option.name}
                        </MenuItem>
                    )})}
                </TextField>
                <div className={classes.tags}>
                    <Typography variant="h5" gutterBottom color='textPrimary'> Tags</Typography>
                    <div className={classes.tagList}>
                    { tagChips }
                </div>
                </div>
                <Button type='submit' color='primary' variant='contained' fullWidth={true}>Cerca</Button>
            </form>
            {!showForm && 
            <IconButton aria-label="search" onClick={() => {setShowForm(true)}}>
                <SearchIcon />
            </IconButton>
            }
            <AnimalList animals={filteredAnimals} />
        </>
    );
}