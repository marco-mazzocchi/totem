import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DrawerContext from '../AppDrawer/DrawerContext';
import AppContext from '../AppContext';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
   title: {
      flexGrow: 1
   }
}));

function NavBar() {
   const drawerContext = useContext(DrawerContext);
   const appContext = useContext(AppContext);
   const { useDarkTheme, setUseDarkTheme } = appContext;
   const onDrawerButton = () => {
      drawerContext.setShowDrawer(!drawerContext.showDrawer);
   };
   const toggleTheme = () => setUseDarkTheme(!useDarkTheme);
   const classes = useStyles();

   return (
      <AppBar position="fixed" color="inherit">
         <Toolbar>
            <IconButton
               onClick={onDrawerButton}
               edge="start"
               color="inherit"
               aria-label="menu"
            >
               <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap className={classes.title}>
               Totem
            </Typography>
            <IconButton
               aria-label="Cambia tema"
               color="inherit"
               onClick={toggleTheme}
            >
               {useDarkTheme ? <WbSunnyIcon /> : <Brightness2Icon />}
            </IconButton>
         </Toolbar>
      </AppBar>
   );
}

export default NavBar;
