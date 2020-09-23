import React from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const  useStyles = makeStyles((theme)=>({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  
  }));

const Signup = () => {
    const classes = useStyles();

    return (
      <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          Sign Up
          </Typography>
          <Form className={classes.form}>
          <TextField 
             variant="outlined"
             margin="normal"
             required
             fullWidth
             id="Name"
             label="Name"
             name="Name"
             autoCapitalize="Name"
             type="Text"
           />

            <TextField 
             variant="outlined"
             margin="normal"
             required
             fullWidth
             id="email"
             label="Email Address"
             name="email"
             autoCapitalize="email"
           />
               <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              au
              toComplete="current-password"
            />
 
               <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Mobile"
              label="Mobile No"
              type="Number"
              id="Number"
              autoComplete="Number"
            />

              <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              />
              <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              >
              Signup
            </Button>
            <Grid container>
              
              <Grid item>
                <NavLink exact to="/Login" variant="body2">
                  {"You' have an account? Lonin "}
                </NavLink>
              </Grid>
            </Grid>
          </Form>
        </div>
      </Container>
      </>
    );
  
  };

export default Signup;
