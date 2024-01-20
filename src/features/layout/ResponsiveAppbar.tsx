// Utilisation du côté client pour ce composant
"use client"

// Importations nécessaires depuis Material-UI et Next.js
import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from 'next/link';

// Importation des logos et définition de la couleur des liens
import logo from '@/app/assets/logo.png';
import logomobile from '@/app/assets/logomobile.png';
const linkColor = "#4a4a54";

// Interface pour les routes
interface Route {
  path: string;
  label: string;
}

// Fonction principale pour la barre de navigation responsive
function ResponsiveAppBar({ routes }: { routes: Route[] }) {
  // État pour gérer l'ouverture/fermeture du menu
  const [anchorElNav, setAnchorElNav] = React.useState<HTMLElement | null>(null);

  // Gestion de l'ouverture du menu
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  // Gestion de la fermeture du menu
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Structure de la barre de navigation
  return (
    <AppBar position='fixed' elevation={4} sx={{color:"#787878", backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: "blur(1px)", zIndex: '1100' }}>
      <Container sx={{ margin: 0, maxWidth: "none", "@media (min-width: 1200px)": { maxWidth: "100%" } }}>
        <Toolbar disableGutters>
          <Box display="flex" justifyContent="space-between" width="100%" sx={{ maxHeight: "120px" }}>
            <Box sx={{ width: '100%' }} display="flex" alignItems="center">
              {/* Affichage du logo selon la taille de l'écran */}
              <Box sx={{ boxSizing: 'border-box', pt: 2, display: { xs: 'none', md: 'block' } }}>
                <Image src={logo} alt="Logo Maurine Dubeuf HEILPRAKTIKER - NUTRITIONNISTE" />
              </Box>
              <Box sx={{ display: { xs: 'block', md: 'none' }, width: 100, position: 'relative', margin: '0 auto' }}>
                <Image src={logomobile} alt="Logo Maurine Dubeuf HEILPRAKTIKER - NUTRITIONNISTE" />
              </Box>
            </Box>
            
            {/* Section des liens de navigation */}
            <Box display="flex" alignItems="center" sx={{ minWidth: 'fit-content' }}> 
              <Box flexGrow={3} display={{ xs: 'flex', md: 'none' }}>
                <IconButton aria-label="Menu" aria-controls='menu-appbar' aria-haspopup='true' onClick={handleOpenNavMenu} color='inherit'>
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
                  sx={{ display: { xs: 'block', md: 'none' }, width: "100vw", maxWidth: "100%", '.MuiPaper-root': { width: '100vw' }, '.MuiMenuItem-root': { justifyContent: 'center' } }}
                  slotProps={{ root: { style: { top: '5em' } } }}
                >
                  {routes.map((route) => (
                    <Link href={route.path} key={route.path}>
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography className='menu-typography' textAlign="center">{route.label}</Typography>
                      </MenuItem>
                    </Link>
                  ))}
                </Menu>
              </Box>
              <Stack direction="row" spacing={2} sx={{ boxSizing: 'content-box', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {routes.map((route) => (
                  <Link href={route.path} key={route.path} passHref>
                    <Button sx={{ textAlign: 'center', color: linkColor, fontSize: '1.5rem', transition: 'border-bottom 1s ease-in-out', '&:hover, &:active': { borderRadius: '0%', background: 'none', borderBottom: '1px solid black' } }} variant='text' onClick={handleCloseNavMenu}>
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
