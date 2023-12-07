import React from "react";
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




function Register()
{
      return (
      <div className="account">
        <Box
          boxShadow={3}
          bgcolor="background.paper"
          m={1}
          p={1}
          style={{ width: "500px", height: "350px", padding: "20px"  }}
        >
          <Typography>
            <span
              style={{
                marginTop: "10px",
                color: "#333232",
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              Sign up
            </span>
          </Typography>
          <Typography color="textSecondary">
            Welcome to FocusFlow!
          </Typography>
         
          <br />
          <form >
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12}>
                <TextField
                  variant="outlined"
                  size="small"
                  fullWidth
                  placeholder="Full name "
                  name="fullname"
                  id="fullname"
                />
              </Grid>
          
              <Grid item xs={12} sm={12}>
                <TextField
                  variant="outlined"
                  size="small"
                  fullWidth
                  type="email"
                  name="email"
                  placeholder="email "
                />
              </Grid>

              <Grid item xs={12} sm={12}>
              <TextField
                  variant="outlined"
                  size="small"
                  fullWidth
                  type="password"
                  name="password"
                  placeholder="password"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Button
                  variant="outlined"
                  size="medium"
                  color="primary"
                  className="account-btn"
                  type="submit"
                >
                  Register
                </Button>
              </Grid>
              <Link href="/login" style={{ margin: "auto", marginTop: "30px" }}>
                <Typography style={{ margin: "auto" }} color="textSecondary">
                  I have account...
                </Typography>
              </Link>
            </Grid>
          </form>
        </Box>
      </div>
    );
  
                }

export default Register;
