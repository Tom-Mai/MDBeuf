"use client"

import * as React from 'react';
import { AppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';


import logo from '@/app/assets/logo.png';
import logomobile from '@/app/assets/logomobile.png'
import Image from 'next/image';
import Link from 'next/link';


const linkColor = "#4a4a54";

interface Route {
  path: string;
  label: string;
}

function ResponsiveAppBar({ routes }: { routes: Route[] }) {
  const [anchorElNav, setAnchorElNav] = React.useState<HTMLElement | null>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
 // <AppBar position="fixed" elevation={4} zIndex={1100} sx={{ color: "#787878", backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: "blur(1px)" }}>
  return (
 
    <AppBar position='fixed' elevation={4} sx={{color:"#787878",backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: "blur(1px)",zIndex:'1100' }}>

   
      <Container sx={{ margin: 0, maxWidth: "none", "@media (min-width: 1200px)": { maxWidth: "100%" } }} className='ContainerMAIN'>
        <Toolbar disableGutters>
          <Box display="flex" justifyContent="space-between" width="100%" sx={{ maxHeight: "120px" }}>
            <Box sx={{ width: '100%' }} display="flex" alignItems="center">
              <Box sx={{ boxSizing: 'border-box', pt: 2, display: { xs: 'none', md: 'block' } }}>
                
                <Image src={logo} alt="Logo Maurine Dubeuf HEILPRAKTIKER - NUTRITIONNISTE" />
              </Box>
              <Box sx={{ display: { xs: 'block', md: 'none' }, width: 100, position: 'relative', margin: '0 auto' }}>
                <Image src={logomobile} alt="Logo Maurine Dubeuf HEILPRAKTIKER - NUTRITIONNISTE" />
              </Box>
            </Box>
            <Box className='AppBar' display="flex" alignItems="center" sx={{ minWidth: 'fit-content' }}>
              <Box flexGrow={1} display={{ xs: 'flex', md: 'none' }} justifyContent={'flex-end'}>
                <IconButton
                  aria-label="Menu"
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleOpenNavMenu}
                  color='inherit'
                >
                  <MenuIcon fontSize='large' />
                </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    keepMounted
                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{ display: { xs: 'block', md: 'none' } }}
                  >
                    {routes.map((route) => (
                      <Link href={route.path} key={route.path}>
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{route.label}</Typography>
                      </MenuItem>
                      </Link>
                    ))}
                  </Menu>
           
              </Box>
              <Stack direction="row" spacing={2} sx={{ boxSizing: 'content-box', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {routes.map((route) => (
                  <Link href={route.path} key={route.path} passHref>
                  <Button
                    sx={{
                      textAlign: 'center',
                      color: linkColor,
                      fontSize: '1.5rem',
                      transition: 'border-bottom 1s ease-in-out',
                      '&:hover, &:active': {
                        borderRadius: '0%',
                        background: 'none',
                        borderBottom: '1px solid black',
                      },
                    }}
                    variant='text'
                    onClick={handleCloseNavMenu}
                  >
                    {route.label}
                  </Button>
                  </Link>
                ))}
              </Stack>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
