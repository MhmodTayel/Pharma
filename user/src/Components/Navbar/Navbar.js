import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import MedicationSharpIcon from "@mui/icons-material/MedicationSharp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useHistory } from "react-router-dom";
import { newProductsContext } from "../../context/newProductsContext";
import { getIncomingMedNumber } from "../../services/userService";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [incomingNumber, setIncomingNumber] = React.useState("");
  React.useEffect(() => {
    getIncomingMedNumber().then(
      (res) => {
        setIncomingNumber(res.data);
      },
      (err) => console.log(err)
    );
  }, []);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElUser2, setAnchorElUser2] = React.useState(null);
  let user = localStorage.getItem("token");
  const history = useHistory();
  function Logout() {
    localStorage.clear();
    history.push("/login");
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenUserMenu2 = (event) => {
    setAnchorElUser2(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseUserMenu2 = () => {
    setAnchorElUser2(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1b8ef2' }} className={styles.navapp}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ p: 1 }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: {
                xs: "none",
                md: "flex",
                alignItems: "center",
                fontWeight: 700,
                fontSize: "1.3rem",
              },
            }}
          >
            <MedicationSharpIcon sx={{ m: 1 }} />
            PHARMA 
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link className={styles.link} to="/home">
                  Home
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link className={styles.link} to="/recently-added">
                  Recently Added
                  <span className={styles.numberBadge}>+{incomingNumber} </span>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link className={styles.link} to="/new-order">
                  New Order
                </Link>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Link className={styles.link} to="/contact-us">
                  Contact Us
                </Link>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              fontWeight: 700,
            }}
          >
            <MedicationSharpIcon mb={5} />
            PHARMA 
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, display: "block" }}
            >
              <Link to="/home" className={styles.navBtn}>
                Home
              </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, display: "block" }}
            >
              <Link to="/recently-added" className={styles.navBtn}>
                Recently Added
                <span className={styles.numberBadge}>+{incomingNumber} </span>
              </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, display: "block" }}
            >
              <Button onClick={handleOpenUserMenu2} className={styles.navBtn} sx={{ p: 0 }} >
                Orders
              </Button>
              <Menu
                sx={{ mt: "45px" }}
                id="tmenu-appbar"
                anchorEl={anchorElUser2}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser2)}
                onClose={handleCloseUserMenu2}
              >
                <MenuItem onClick={handleCloseUserMenu2}>
                  <Link className={styles.link} to="/new-order">
                    New Order
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu2}>
                  <Link className={styles.link} to="/saved-orders">
                      Saved Orders
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu2}>
                  <Link className={styles.link} to="/orders">
                      Orders
                  </Link>
                </MenuItem>   
              </Menu>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, display: "block" }}
            >
              <Link to="/contact-us" className={styles.navBtn}>
                Contact Us
              </Link>
            </Button>
          </Box>

          <MenuItem>
            <Typography textAlign="center" sx={{ mr: 3 }}>
              <Link to="/new-order" className={styles.navBtn}>
                <ShoppingCartIcon />
              </Link>
            </Typography>
          </MenuItem>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography className={styles.settingsLink}>Profile</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography className={styles.settingsLink}>Account</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography onClick={Logout} className={styles.settingsLink}>
                  Logout
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
