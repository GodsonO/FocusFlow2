import React, { useState } from "react";
import Logo from "../../../img/log.png";
import Login from "../../acount/Login";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
      {
        text: "Home",
        icon: <HomeIcon />,
      },
      {
        text: "About",
        icon: <InfoIcon />,
      },
      {
        text: "Features",
        icon: <CommentRoundedIcon />,
      },
      {
        text: "Team",
        icon: <PhoneRoundedIcon />,
      },
     
    ];
    return (
      <nav>
        <div className="nav-logo-container">
          <img src={Logo} alt="" height="80" />
        </div>
        <div className="navbar-links-container">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#work">Features</a>
          <a href="#team">Team</a>
         

          <a href="../../Login">
          <button className="primary-button" >Login</button>
          </a>
        </div>
        <div className="navbar-menu-container">
        <MenuIcon  onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            <List>
              {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Box>
        </Drawer>
      </nav>
    );
  };
  
  export default Navbar;




