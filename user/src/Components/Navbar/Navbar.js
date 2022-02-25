import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MedicationSharpIcon from '@mui/icons-material/MedicationSharp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { newProductsContext } from '../../context/newProductsContext';

const settings = ['Profile', 'Account', 'Logout'];

const Navbar = () => {
  const {productsContext} = React.useContext(newProductsContext)
  const pages = [{page:'Home', path:'/home'}
  ,{page:`Recently Added ` , path:'/recently-added'} 
  ,{page:'New Order',path:'/new-order'}
  ,{page:'Contact Us',path:'/contact-us'}
  ];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static"  sx={{ backgroundColor:'#4ebbe9' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{p:1}}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' ,alignItems: 'center', fontWeight: 700 } }}
          >
            <MedicationSharpIcon sx={{m:1}}/> 
             PHARMA TECH
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page,indx) => (
                <MenuItem key={indx} onClick={handleCloseNavMenu}>
                  <Link style={{ color:'#4ebbe9', textDecoration:'none'}} to={page.path}>{page.page}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } , alignItems: 'center',fontWeight: 700 }}
          >
            <MedicationSharpIcon mb={5}/> 
            PHARMA TECH
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page,indx) => (
              <Button
                key={indx}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block' }}
              >
                <Link to={page.path} style={{ color:'white', textDecoration:'none'}}>{page.page}</Link>
              </Button>
            ))}
          </Box>
        
          <MenuItem>
                  <Typography textAlign="center" sx={{mr:3}}>
                    <ShoppingCartIcon/>
                  </Typography>
          </MenuItem>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
