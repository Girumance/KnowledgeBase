import react, { useState } from "react";
import {
  AppBar,
  Button,
  Icon,
  makeStyles,
  Toolbar,
  Typography
} from "@material-ui/core";

import Serach from "./Search";
import SignIn from "../SignIn";
import Dialog from "../Dialog"
import SignUp from "../SignUp";

const UseStyles = makeStyles({
  root: {
    //backgroundColor: "#FEFEFA"
  },

  toolbar: {
    display: " flex",
    justifyContent: "space-between"
  },

  right: {
    display: "flex",
    justifyContent: "space-between"
  },

  button: {
    marginLeft: "10"
  },

  color:{
    color:"#fff"
  }
});


const Index = () => {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const classes = UseStyles();
  
  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar color="inherit" className={classes.toolbar}>
        <div>
          
          <Typography color="inherit">Knowledge Base</Typography>
        </div>

        <div className={classes.right}>
          <Serach />
          <Button onClick={ ()=> setSignUp(true) } className={classes.button} variant="outlined" color="secondary">
  
            SignUP
          </Button>
          <Button onClick={ ()=> setSignIn(true) } className={classes.button} variant="outlined" color="secondary">
  
            Login
          </Button>
          <Dialog value={signIn}  onClose={ ()=> setSignIn(false)}> <SignIn/> </Dialog>
          <Dialog value={signUp}  onClose={ ()=> setSignUp(false)}> <SignUp/> </Dialog>
        </div>
       
      </Toolbar>

      
    </AppBar>
  );
};

export default Index;
