import React from "react";
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Nav from "../pages/nav/nav";
import Home from "../pages/nav/home";
import About from "../pages/nav/about";
import Work from "../pages/nav/features";
import Team from "../pages/nav/team";





import "./land.css";

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#">
          FocusFlow
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
const useStyles = styled((theme) => ({
    root: {
      display: "flex",
    },
    content: {
      marginTop:"100px",
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }));



function LandingPage(props) {
    const classes = useStyles();

    return (
      <div className="home-container">
      <Nav />
      <Home />
      <About />
      <Work />
      <Team />

      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          FocusFlow
        </Typography>
        {/* <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography> */}
        <Copyright />
      </Box>
      
      </div>
    );
}

export default LandingPage;
