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
import { getIncomingMedNumber } from '../../services/userService';
import styles from './Navbar.module.scss'

const Navbar = () => {
  const [incomingNumber, setIncomingNumber] = React.useState('');
  React.useEffect(()=>{
    getIncomingMedNumber().then(
      (res) => {
        setIncomingNumber(res.data)
      },
      (err) => console.log(err) 
    )
  },[])


  const {productsContext} = React.useContext(newProductsContext)
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
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link className={styles.link} to='/home'>Home</Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link className={styles.link} to='/recently-added'>Recently Added 
                  <span className={styles.numberBadge}>+{incomingNumber} </span>
                  </Link>
                </MenuItem>    
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link className={styles.link} to='/new-order'>New Order</Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link className={styles.link} to='/contact-us'>Contact Us</Link>
                </MenuItem>
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
            <Button onClick={handleCloseNavMenu} sx={{ my: 2, display: 'block' }}>
              <Link to='/home' className={styles.navBtn}>Home</Link>
            </Button>
            <Button onClick={handleCloseNavMenu} sx={{ my: 2, display: 'block' }}>
              <Link to='/recently-added' className={styles.navBtn}>Recently Added
               <span className={styles.numberBadge}>+{incomingNumber} </span>
               </Link>
            </Button>
            <Button onClick={handleCloseNavMenu} sx={{ my: 2, display: 'block' }}>
              <Link to='/new-order' className={styles.navBtn}>New Order</Link>
            </Button>
            <Button onClick={handleCloseNavMenu} sx={{ my: 2, display: 'block' }}>
              <Link to='/contact-us' className={styles.navBtn}>Contact Us</Link>
            </Button>
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
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography className={styles.settingsLink}>Profile</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography className={styles.settingsLink}>Account</Typography>
            </MenuItem><MenuItem onClick={handleCloseUserMenu}>
              <Typography  className={styles.settingsLink}>Logout</Typography>
            </MenuItem>
            </Menu>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
