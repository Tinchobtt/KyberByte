import { AppBar, Box, Hidden, IconButton, Menu, MenuItem, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import CartWidget from '../../common/cartWidget/CartWidget';

const Navbar = ()=> {
    const [verMenu, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position='static'>
            <Toolbar position="static" sx={{backgroundColor:'#F1F1E9', display: 'flex', justifyContent: 'space-between'}}>
                <Box sx={{width: {xs: 110, sm: 150}}}>
                    <img src="https://res.cloudinary.com/dwyf1blmt/image/upload/v1687076562/logo_tsv1kb.svg" alt="logotipo" />
                </Box>
                <Box sx={{display: {md: 'flex'}}}>
                    <Hidden mdDown>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <MenuItem onClick={handleMenuClose} sx={{color: '#000'}}>Home</MenuItem>
                            <MenuItem onClick={handleMenuClose} sx={{color: '#000'}}>Productos</MenuItem>
                            <MenuItem onClick={handleMenuClose} sx={{color: '#000'}}>Contacto</MenuItem>
                        </Box>
                    </Hidden>
                    <CartWidget />
                    <Menu
                        anchorEl={verMenu}
                        open={Boolean(verMenu)}
                        onClose={handleMenuClose}
                        >
                        <MenuItem onClick={handleMenuClose}>Home</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Productos</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Contacto</MenuItem>
                    </Menu>
                    <IconButton
                        color="inherit"
                        aria-label="menu"
                        aria-controls="menu"
                        aria-haspopup="true"
                        onClick={handleMenuOpen}
                        sx={{ p: 0, display: {md: 'none'}}}>
                        <MenuIcon sx={{ color: '#000', width: 35, height: 35}}/>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;