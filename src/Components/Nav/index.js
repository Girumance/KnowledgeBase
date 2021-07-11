<<<<<<< HEAD
import react, { useState } from "react";
=======
import {useState} from "react";
>>>>>>> 7f12953f74ea668af88cbf13a19b49a27fc418d0
import {
  AppBar,
  Button,
  Icon,
  makeStyles,
  Toolbar,
  Typography
} from "@material-ui/core";

import Serach from "./Search";
<<<<<<< HEAD
import SignIn from "../SignIn";
import Dialog from "../Dialog"
import SignUp from "../SignUp";

const UseStyles = makeStyles({
=======
import Dialog from "./../Dialog"
import Users from "./../Home/Users"
import SignIN from "./../SignIn/index"
import SignUp from "../SignUp/index";
 const UseStyles = makeStyles({
>>>>>>> 7f12953f74ea668af88cbf13a19b49a27fc418d0
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

<<<<<<< HEAD

const Index = () => {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const classes = UseStyles();
  
=======
const Index = () => {
  const classes = UseStyles();
  const [user, setUser] = useState(false)
  const [signIn, setSignIn] = useState(false)
  const [signUp, setSignUp] = useState(false)


>>>>>>> 7f12953f74ea668af88cbf13a19b49a27fc418d0
  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar color="inherit" className={classes.toolbar}>
        <div>
          
          <Typography color="inherit">Knowledge Base</Typography>
        </div>

        <div className={classes.right}>
          <Serach />
<<<<<<< HEAD
          <Button onClick={ ()=> setSignUp(true) } className={classes.button} variant="text" color="primary">
  
            SignUP
          </Button>
          <Button onClick={ ()=> setSignIn(true) } className={classes.button} variant="outlined" color="primary">
  
            Login
          </Button>
          <Dialog value={signIn}  onClose={ ()=> setSignIn(false)}> <SignIn/> </Dialog>
          <Dialog value={signUp}  onClose={ ()=> setSignUp(false)}> <SignUp/> </Dialog>
=======
          <Button variant="text" color="secondary" onClick={() => setUser(true)}>Users</Button>
          <Button onClick= {() => setSignIn(true)} className={classes.button} variant="outlined" color="secondary">
            Login
          </Button>
          <Button onClick = {() => setSignUp(true)} className={classes.button} variant="outlined" color="secondary">   
            SignUp
          </Button>

          <Dialog value={user}   onClose= { () => setUser(false)}>  <Users/> </Dialog>
          <Dialog value={signIn} onClose= { () => setSignIn(false)}> <SignIN OnClose={ () => setSignIn(false) }/> </Dialog>
          <Dialog value={signUp} onClose= { () => setSignUp(false)}> <SignUp/>  </Dialog>
>>>>>>> 7f12953f74ea668af88cbf13a19b49a27fc418d0
        </div>
       
      </Toolbar>

      
    </AppBar>
  );
};

<<<<<<< HEAD
export default Index;
=======
export default Index
>>>>>>> 7f12953f74ea668af88cbf13a19b49a27fc418d0
