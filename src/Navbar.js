import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const ResponsiveAppBar = () => {
    return (
        <AppBar position="static" style={{background: "#2F7AA8"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Typography
                        align={"center"}
                        variant="h4"
                        sx={{
                            mr: 5,
                            display: { xs: 'flex', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.4rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        βo <div style={{color: "#F55151"}}>RED</div>
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
