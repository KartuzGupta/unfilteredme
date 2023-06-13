import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import classes from './NavigationBar.module.css';

import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)`
  background-color: transparent;
  backdrop-filter: blur(2rem);
`;

const pages = ['About', 'Education', 'Experience', 'Skills', 'Projects', 'POR'];

function NavigationBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleClick = (page) => { 
    const element = document.getElementById(page);
    console.log(element)
    if (element) {
        // scroll to your element
        element.scrollIntoView({ behavior: 'smooth' });      
    }
    
    handleCloseNavMenu();
  }
  return (
    <StyledAppBar position='fixed'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <FilterAltOffIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            UNFILTERED ME
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'none' }}} >
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
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              onClick={handleCloseNavMenu}
              className={classes.menuBar}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleClick(page)}>
                  <Typography textAlign="center" sx={{fontFamily:'Poppins', color:'black'}} >{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <FilterAltOffIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Poppins',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            UNFILTERED ME
          </Typography>
          
          {/* Large Screen */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } , justifyContent:'flex-end' }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'black', display: 'block', fontFamily:'Poppins'}}
                onClick={()=> handleClick(page)}
              >
                {page}
              </Button>
            ))}
          </Box>

          
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}
export default NavigationBar;