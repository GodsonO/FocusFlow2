import React from 'react'
import Drawer from '@mui/material/Drawer';
import Hidden from "@mui/material/Hidden";
import { styled } from '@mui/material/styles';
import Sidemenu from "../headerMenu/Headermenu"


const drawerWidth = 240;

const useStyles = styled((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#18202c",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const drawer = <Sidemenu />;

function Sideheader(props) {
  
   const classes = useStyles();
   const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
    );
}

export default Sideheader;