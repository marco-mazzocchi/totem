import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import NavBar from './NavBar/NavBar';
import AppDrawer from './AppDrawer/AppDrawer';
import SearchPage from './SearchPage/SearchPage';
import AllAnimalsPage from './AllAnimalsPage/AllAnimalsPage';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { blueGrey, red } from '@material-ui/core/colors';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import DrawerContext from './AppDrawer/DrawerContext';
import AppFab from './AppFab/AppFab';
import AppContext from './AppContext';
import CategoryPage from './CategoryPage/CategoryPage';
import TagPage from './TagPage/TagPage';
import AnimalDetails from './AnimalDetails/AnimalDetails';
import { Box } from '@material-ui/core';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: '#EFAC78' },
    secondary: { main: '#FAE09B' },
    background: {
      paper: '#513E52',
      default: '#433244'
    },
    text: {
      primary: '#FBF8DC',
      secondary: '#F6D2A3'
    }
  }
});

function App() {

  const [showDrawer, setShowDrawer] = useState(false);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
      axios.get('/api/categories/').then(response => {
                if (response.status === 200) {
                    setCategories(response.data.results);
                }
            });
      axios.get('/api/tags/').then(response => {
            if (response.status === 200) {
                setTags(response.data.results);
            }
        });
  }, []);


  return (
    <ThemeProvider theme={theme}>
    <AppContext.Provider value={{
        categories,
        tags
      }}>
      <Box bgcolor="background.default" style={{minHeight: '100vh'}} py={8}>
    <Router>
      <DrawerContext.Provider value={{
        showDrawer,
        setShowDrawer
      }}>
        <NavBar />
        <AppDrawer />
        <AppFab />
      </DrawerContext.Provider>
      
      <Container maxWidth="md">
        <Switch>
            <Route path="/animals" exact>
              <AllAnimalsPage />
            </Route>
            <Route path="/animals/:id">
              <AnimalDetails />
            </Route>
            <Route path="/category/:id">
              <CategoryPage />
            </Route>
            <Route path="/tags/:id">
              <TagPage />
            </Route>
            <Route path="/">
              <SearchPage />
            </Route>
            </Switch>
      </Container>
      
        </Router>
        </Box>
    </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;