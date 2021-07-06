import {useState} from "react";
import {
  AppBar,
  Button,
  Icon,
  makeStyles,
  Toolbar,
  Typography
} from "@material-ui/core";

import Serach from "./Search";
import Dialog from "./../Dialog"
import Users from "./../Home/Users"
import SignIN from "./../SignIn/index"
import SignUp from "../SignUp/index";
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
  const classes = UseStyles();
  const [user, setUser] = useState(false)
  const [signIn, setSignIn] = useState(false)
  const [signUp, setSignUp] = useState(false)


  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar color="inherit" className={classes.toolbar}>
        <div>
          
          <Typography color="inherit">Knowledge Base</Typography>
        </div>

        <div className={classes.right}>
          <Serach />
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
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Index