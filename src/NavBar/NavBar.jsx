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
   AppBar: {
      backgroundColor: theme.palette.background.paper
   },
   title: {
      flexGrow: 1,
      color: theme.palette.text.primary
   }
}));

function NavBar() {
   const drawerContext = useContext(DrawerContext);
   const appContext = useContext(AppContext);
   const { useDarkTheme, setDarkTheme } = appContext;
   const onDrawerButton = () => {
      drawerContext.setShowDrawer(!drawerContext.showDrawer);
   };
   const toggleTheme = () => setDarkTheme(!useDarkTheme);
   const classes = useStyles();

   return (
      <AppBar position="fixed" className={classes.AppBar}>
         <Toolbar>
            <IconButton onClick={onDrawerButton} edge="start" aria-label="menu">
               <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap className={classes.title}>
               Totem
            </Typography>
            <IconButton aria-label="Cambia tema" onClick={toggleTheme}>
               {useDarkTheme ? <WbSunnyIcon /> : <Brightness2Icon />}
            </IconButton>
         </Toolbar>
      </AppBar>
   );
}

export default NavBar;
