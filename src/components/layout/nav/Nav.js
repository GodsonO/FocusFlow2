import React from 'react'
import AppBar from '@mui/material/AppBar';

import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';



const drawerWidth = 240;



function Nav() {

  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
    return (
    
      <AppBar position="fixed" open={open}  >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" >
           FlashFlow
          </Typography>
        </Toolbar>
      </AppBar>
    );
}


export default Nav;
