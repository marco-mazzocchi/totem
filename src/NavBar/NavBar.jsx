import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DrawerContext from '../AppDrawer/DrawerContext';

function NavBar() {
    const drawerContext = useContext(DrawerContext);
    const onDrawerButton = () => {
        drawerContext.setShowDrawer(!drawerContext.showDrawer);
    };
    return (
        <AppBar position="fixed" color="inherit">
            <Toolbar>
                <IconButton onClick={onDrawerButton} edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                    Totem
            </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;