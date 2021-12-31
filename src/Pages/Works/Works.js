import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, useRouteMatch } from 'react-router-dom';
import Menu from '../Menu/Menu';
import './Works.css';


const drawerWidth = 240;

function Works(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    let match = useRouteMatch();


    const drawer = (
        <div>
            <Toolbar />
            <Menu></Menu>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    display: { lg: 'none' }
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"

                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Maruf's Portfolio
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"

            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}

                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <div className='works-main'>
                    <div className="inner-works inner-works-img-one">
                         <a href="https://hospitalwebapplication.web.app/" target="_blank" className='cutm-btn'>Visit</a>
                    </div>
                    <div className="inner-works inner-works-img-two">
                         <a href="https://zulzana-coffie.web.app/" target="_blank" className='cutm-btn'>Visit</a>
                    </div>
                    <div className="inner-works inner-works-img-three">
                         <a href="https://wedding-ceremony.netlify.app/" target="_blank" className='cutm-btn'>Visit</a>
                    </div>
                    <div className="inner-works inner-works-img-four">
                         <a href="https://marufmubin.github.io/Zulzana/" target="_blank" className='cutm-btn'>Visit</a>
                    </div>
                    <div className="inner-works inner-works-img-five">
                         <a href="https://travel-agency-c10b6.web.app/" target="_blank" className='cutm-btn'>Visit</a>
                    </div>
                    <div className="inner-works inner-works-img-six">
                         <a href="https://marufmobin.github.io/automobile/" target="_blank" className='cutm-btn'>Visit</a>
                    </div>
                    <div className="inner-works inner-works-img-seven">
                         <a href="https://marufmubin.github.io/new/" target="_blank" className='cutm-btn'>Visit</a>
                    </div>
                    <div className="inner-works inner-works-img-eight">
                        <a href="https://marufmubin.github.io/GoHub-Project/" target="_blank" className='cutm-btn'>Visit</a>
                    </div>
                </div>
            </Box>
        </Box>
    );
}

Works.propTypes = {

    window: PropTypes.func,
};

export default Works;
