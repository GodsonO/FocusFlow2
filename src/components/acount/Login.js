import React from "react";
import { GlobalStyles, createTheme, ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import { InputAdornment, OutlinedInput, IconButton, Button, Link,  } from '@mui/material';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FilledInput from '@mui/material/FilledInput';
import Alert from '@mui/material/Alert';

import "./index.css";





function Login() 
{
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  

  return (
        <div className="account">
          <Box component="section" boxShadow={3}
            bgcolor="background.paper"
            m={1}
            p={1}
            style={{ width: "500px", height: "400px", padding: "30px" }} >


    <Typography>
      
              <span
                style={{
                  marginTop: "40px",
                  color: "#333232",
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
              >
                Login
            </span>
            </Typography>

            <Typography color="textSecondary">Welcome back!</Typography>
            <br />
            <form>
              <Grid container spacing={1} item>
                <Grid item xs={12} sm={12}>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    type="email"
                    placeholder="email "
                    name="email"
                  />
                </Grid>
              
                <Grid item xs={12} sm={12}>
                <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <FilledInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
          </Grid>
                <Grid item xs={6} sm={6} style={{
                  margin: "auto",
                  marginTop: "10px",

                }}>
                  <Button
                    variant="contained"
                    size="medium"
                    color="primary"
                    className="account-btn"
                    type="submit"
                  >
                    Login
                </Button>
                </Grid>

                <Grid item xs={12} sm={12}>
                <Link href="/register"  underline="hover" >
                  <Typography style={{ marginLeft: "4px" }} color="textSecondary">
                    I don't have account...
                </Typography>
                </Link>
                </Grid>
                
                
          
              
              </Grid>
            </form>
           

    </Box>
        </div>
      )
    
    ;
  
                  }

export default Login;
