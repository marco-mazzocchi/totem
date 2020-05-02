import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
   SwipeableDrawer,
   List,
   Divider,
   ListItem,
   ListItemIcon,
   ListSubheader,
   Collapse,
   ListItemText
} from '@material-ui/core';

// icons
import TextFormatIcon from '@material-ui/icons/TextFormat';
import PetsIcon from '@material-ui/icons/Pets';
import SearchIcon from '@material-ui/icons/Search';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import EuroIcon from '@material-ui/icons/Euro';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

import DrawerContext from './DrawerContext';
import AppContext from '../AppContext';

function AppDrawer() {
   const drawerContext = useContext(DrawerContext);
   const appContext = useContext(AppContext);
   const [showCategories, setShowCategories] = useState(false);
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
         <ListItem
            button
            onClick={e => {
               e.preventDefault();
               e.stopPropagation();
               setShowCategories(!showCategories);
            }}
         >
            <ListItemText primary="Categorie" />
            {showCategories ? <ExpandLess /> : <ExpandMore />}
         </ListItem>
         <Collapse in={showCategories} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
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
         </Collapse>
         <Divider />
         <List>
            <ListItemLink href="/app/history">
               <ListItemIcon>
                  <AccountBalanceIcon />
               </ListItemIcon>
               <ListItemText primary="La storia dei totem" />
            </ListItemLink>
            <ListItemLink href="/app/adjectives">
               <ListItemIcon>
                  <TextFormatIcon />
               </ListItemIcon>
               <ListItemText primary="Aggettivi per totem" />
            </ListItemLink>
            <ListItemLink href="/app/donate">
               <ListItemIcon>
                  <EuroIcon />
               </ListItemIcon>
               <ListItemText primary="Supportaci" />
            </ListItemLink>
            <ListItemLink href="/app/credits">
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
