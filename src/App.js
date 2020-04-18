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
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DrawerContext from './AppDrawer/DrawerContext';
import AppFab from './AppFab/AppFab';
import AppContext from './AppContext';
import CategoryPage from './CategoryPage/CategoryPage';
import TagPage from './TagPage/TagPage';
import CreditsPage from './CreditsPage/CreditsPage';
import HistoryPage from './HistoryPage/HistoryPage';
import DonatePage from './DonatePage/DonatePage';
import AnimalDetails from './AnimalDetails/AnimalDetails';
import { Box } from '@material-ui/core';
import ReactGA from 'react-ga';
import Disclaimer from './Disclaimer/Disclaimer';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import bgDark from './images/landscape-336542_blur.jpg';
import bgLight from './images/photo-1508341421810-36b8fc06075b_blur.jpeg';

axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';

if (process.env.hasOwnProperty('REACT_APP_GA_TRACKING_CODE')) {
   ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_CODE);
}

const darkTheme = createMuiTheme({
   palette: {
      type: 'dark',
      common: {
         black: '#FBF8DC',
         white: '#1D151F'
      },
      primary: { main: '#EFAC78' },
      secondary: { main: '#FAE09B' },
      background: {
         paper: '#2A1F2C',
         default: '#1D151F'
      },
      text: {
         primary: '#FBF8DC',
         secondary: '#F6D2A3'
      }
   }
});

const lightTheme = createMuiTheme({
   // palette: {
   //    primary: { main: '#2DC4AD' },
   //    secondary: { main: '#F5433B' }
   // }
});

function App() {
   const darkThemeStoredValue = localStorage.getItem('darkTheme') === 'true';
   const showDisclaimerValue =
      localStorage.getItem('disclaimerAccepted') === 'true';
   const [showDisclaimer, setShowDisclaimer] = useState(!showDisclaimerValue);
   const [showDrawer, setShowDrawer] = useState(false);
   const [useDarkTheme, setUseDarkTheme] = useState(darkThemeStoredValue);
   const [categories, setCategories] = useState([]);
   const [tags, setTags] = useState([]);

   const useStyles = makeStyles(theme => {
      const bg = useDarkTheme ? bgDark : bgLight;
      return {
         mainBox: {
            backgroundColor: theme.palette.background.default,
            backgroundImage: `url(${bg})`,
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            minHeight: '75vh'
         }
      };
   });
   const classes = useStyles();

   const setDarkTheme = value => {
      localStorage.setItem('darkTheme', value);
      setUseDarkTheme(value);
   };
   const onDisclaimerConfirm = () => {
      localStorage.setItem('disclaimerAccepted', true);
      setShowDisclaimer(false);
   };

   useEffect(() => {
      axios.get('/api/categories/').then(response => {
         if (response.status === 200) {
            setCategories(response.data);
         }
      });
      axios.get('/api/tags/').then(response => {
         if (response.status === 200) {
            setTags(response.data);
         }
      });
   }, []);

   return (
      <AppContext.Provider
         value={{
            categories,
            tags,
            useDarkTheme,
            setDarkTheme
         }}
      >
         <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
            <Box className={classes.mainBox} py={12}>
               <Router basename="/app">
                  <DrawerContext.Provider
                     value={{
                        showDrawer,
                        setShowDrawer
                     }}
                  >
                     <NavBar />
                     <AppDrawer />
                     <AppFab />
                  </DrawerContext.Provider>

                  <Container maxWidth="sm">
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
                        <Route path="/credits">
                           <CreditsPage />
                        </Route>
                        <Route path="/donate">
                           <DonatePage />
                        </Route>
                        <Route path="/history">
                           <HistoryPage />
                        </Route>
                        <Route path="/">
                           <SearchPage />
                        </Route>
                     </Switch>
                  </Container>
               </Router>
            </Box>
            <Dialog
               fullScreen
               open={showDisclaimer}
               onClose={setShowDisclaimer}
            >
               <Disclaimer onConfirm={onDisclaimerConfirm} />
            </Dialog>
         </ThemeProvider>
      </AppContext.Provider>
   );
}

export default App;
