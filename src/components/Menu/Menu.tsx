import { AppBar, Box, Container, IconButton, Toolbar, Typography, Menu as MenuMui, MenuItem, Button, Tooltip, Avatar } from '@mui/material';
import { useContext, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const publicPages = [
    { name: "Inicio", path: "/" },
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
];
const privatePages = [
    ...publicPages,
    { name: "Dashboard", path: "/dashboard" },
    { name: "Profile", path: "/profile" },
];
const adminPages = [
    ...privatePages,
    { name: "Admin", path: "/admin" },
];

const settings = ['Configuración', 'Perfil', 'Cerrar sesión'];

export const Menu = () => {
    const { user,  isLoggedIn, logout} = useContext(AuthContext);

    let pages = publicPages;

    if(isLoggedIn && user?.role === 'admin') {
        pages = adminPages;
    } else if(isLoggedIn) {
        pages = privatePages;
    }

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElNav(event.currentTarget);
    }

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElUser(event.currentTarget);
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    }

    return (
        <AppBar position='fixed' sx={{width:'100vw'}}>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant='h6'
                        noWrap
                        component='a'
                        href='#app-bar-with-responsive-menu'
                        sx={{
                            mr:2,
                            display: { xs: 'none', sm: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Logo
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size='large'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleOpenNavMenu}
                            color='inherit'
                        >
                            <MenuIcon />
                        </IconButton>
                        <MenuMui
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left'
                            }}  
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onAbort={handleCloseNavMenu}
                            sx={{display: {xs: 'block', md: 'none'}}}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                    <Typography
                                        component={Link}
                                        to={page.path}
                                        sx={{
                                            textDecoration: 'none',
                                            color: 'inherit'
                                        }}
                                    >
                                        {page.name}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </MenuMui>
                    </Box>
                    <AdbIcon sx={{display:{xs:'flex',md:'none'}, mr:1}} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                        <Button
                            key={page.name}
                            component={Link}
                            to={page.path}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {page.name}
                        </Button>
                        ))}
                    </Box>
                    {isLoggedIn && (
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                            </Tooltip>
                            <MenuMui
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
                                <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                </MenuItem>
                            ))}
                            </MenuMui>
                        </Box>        
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    )
}