import { AppBar, Box, Hidden, IconButton, Menu, MenuItem, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import CartWidget from '../../common/cartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = ()=> {
    const [verMenu, setVerMenu] = useState(null);

    const handleMenuOpen = (event) => {
        setVerMenu(event.currentTarget);
    };
    
    const handleMenuClose = () => {
        setVerMenu(null);
    };

    return (
        <AppBar position='static'>
            <Toolbar position="static" sx={{backgroundColor:'#fff', display: 'flex', justifyContent: 'space-between', boxShadow: '0 5px 10px rgba(0,0,0, .25)'}}>
                <Link to={'/'}>
                    <Box sx={{width: {xs: 110, sm: 150}}}>
                        <img src="https://res.cloudinary.com/dwyf1blmt/image/upload/v1687076562/logo_tsv1kb.svg" alt="logotipo" />
                    </Box>
                </Link>
                <Box sx={{display: {md: 'flex'}}}>
                    <Hidden mdDown>
                        <Box sx={{ display: 'flex', alignItems: 'center'}}>
                            <Link to={'/'}><MenuItem onClick={handleMenuClose} sx={{color: '#000'}}>Home</MenuItem></Link>
                            <Link to={'/category/notebook'}><MenuItem onClick={handleMenuClose} sx={{color: '#000'}}>Computers</MenuItem></Link>
                            <Link to={'/category/celular'}><MenuItem onClick={handleMenuClose} sx={{color: '#000'}}>Cellphones</MenuItem></Link>
                            <Link to={'/form'}><MenuItem onClick={handleMenuClose} sx={{color: '#000'}}>Form</MenuItem></Link>
                        </Box>
                    </Hidden>
                    <Link to={'/cart'}>
                        <CartWidget />
                    </Link>
                    <Menu
                        anchorEl={verMenu}
                        open={Boolean(verMenu)}
                        onClose={handleMenuClose}
                        >
                        <Link to={'/'}><MenuItem onClick={handleMenuClose} sx={{color: '#000'}}>Home</MenuItem></Link>
                        <Link to={'/category/notebook'}><MenuItem onClick={handleMenuClose} sx={{color: '#000'}}>Computers</MenuItem></Link>
                        <Link to={'/category/celular'}><MenuItem onClick={handleMenuClose} sx={{color: '#000'}}>Cellphones</MenuItem></Link>
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