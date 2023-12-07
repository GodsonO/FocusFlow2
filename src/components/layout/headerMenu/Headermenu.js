import React from "react";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FolderIcon from '@mui/icons-material/Folder';

import "./index.css"
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";


import Badge from "@mui/material/Badge";
import Logout from "../../acount/logout";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))


const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 0),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));




export default function SIdemenu() {
 
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);


  const handleDrawerClose = () => {
    setOpen(false);
  };
 
  return (
    <Drawer  
      variant="permanent"
      open={open}
    >
      <DrawerHeader>
        <ListItem>
          <ListItemIcon className="clrwhite">
            <StyledBadge
              overlap="circle"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              variant="dot"
            >
              <Avatar alt="Godson" src="." />
            </StyledBadge>
          </ListItemIcon>
          <ListItemText className="clrwhite" primary={"Godson"} />
        </ListItem>
        <IconButton onClick={handleDrawerClose}>
        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
     
        <Link to="/adduser">
          <ListItem button>
            <ListItemIcon className="clrwhite">
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText className="clrwhite" primary={`Add user`} />
          </ListItem>
        </Link>
        <Link to="/projects">
          <ListItem button>
            <ListItemIcon className="clrwhite">
              <FolderIcon />
            </ListItemIcon>
            <ListItemText className="clrwhite" primary={`Projects`} />
          </ListItem>
        </Link>
        <Link to="/tasks">
          <ListItem button>
            <ListItemIcon className="clrwhite">
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText className="clrwhite" primary={`Tasks`} />
          </ListItem>
        </Link>
        <Link to="/assign-task">
          <ListItem button>
            <ListItemIcon className="clrwhite">
              <NoteAddIcon />
            </ListItemIcon>
            <ListItemText className="clrwhite" primary={`Assign task`} />
          </ListItem>
        </Link>
        <Link to="/Completed">
          <ListItem button>
            <ListItemIcon className="clrwhite">
              <CloudDoneIcon />
            </ListItemIcon>
            <ListItemText className="clrwhite" primary={`Completed`} />
          </ListItem>
        </Link>
        <Link to="profile">
          <ListItem button>
            <ListItemIcon className="clrwhite">
              <PermContactCalendarIcon />
            </ListItemIcon>
            <ListItemText className="clrwhite" primary={`Profile`} />
          </ListItem>
        </Link>
        <Link to="/login" >
          <Logout/>
        </Link>
      </List>
    </Drawer>
  );
} 
