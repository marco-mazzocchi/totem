import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import PetsIcon from '@material-ui/icons/Pets';
import SearchIcon from '@material-ui/icons/Search';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import DrawerContext from './DrawerContext';
import AppContext from '../AppContext';
import EuroIcon from '@material-ui/icons/Euro';

function AppDrawer() {
   const drawerContext = useContext(DrawerContext);
   const appContext = useContext(AppContext);
   const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
   const useStyles = makeStyles({
      list: {
         width: 250
      },
      fullList: {
         width: 'auto'
      }
   });
   const classes = useStyles();

   const toggleDrawer = open => event => {
      if (
         event &&
         event.type === 'keydown' &&
         (event.key === 'Tab' || event.key === 'Shift')
      ) {
         return;
      }
      drawerContext.setShowDrawer(open);
   };

   function ListItemLink(props) {
      return <ListItem button component="a" {...props} />;
   }

   const Items = (
      <div
         className={classes.list}
         role="presentation"
         onClick={toggleDrawer(false)}
         onKeyDown={toggleDrawer(false)}
      >
         <List>
            <ListItemLink href="/">
               <ListItemIcon>
                  <SearchIcon />
               </ListItemIcon>
               <ListItemText primary="Cerca" />
            </ListItemLink>
            <ListItemLink href="/app/animals">
               <ListItemIcon>
                  <PetsIcon />
               </ListItemIcon>
               <ListItemText primary="Mostra tutti" />
            </ListItemLink>
         </List>
         <Divider />
         <List
            subheader={
               <ListSubheader component="div" id="nested-list-subheader">
                  Per Categorie
               </ListSubheader>
            }
         >
            {appContext.categories.map(category => (
               <ListItemLink
                  href={`/app/category/${category.id}`}
                  key={category.id}
               >
                  <ListItemIcon>
                     <ChevronRightIcon />
                  </ListItemIcon>
                  <ListItemText primary={category.name} />
               </ListItemLink>
            ))}
         </List>
         <Divider />
         <List>
            <ListItemLink href="/donate">
               <ListItemIcon>
                  <EuroIcon />
               </ListItemIcon>
               <ListItemText primary="Supportaci" />
            </ListItemLink>
            <ListItemLink href="/credits">
               <ListItemIcon>
                  <LoyaltyIcon />
               </ListItemIcon>
               <ListItemText primary="Credits" />
            </ListItemLink>
         </List>
      </div>
   );

   return (
      <div>
         <SwipeableDrawer
            open={drawerContext.showDrawer}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            disableBackdropTransition={!iOS}
            disableDiscovery={iOS}
         >
            {Items}
         </SwipeableDrawer>
      </div>
   );
}

export default AppDrawer;
