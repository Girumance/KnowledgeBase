import react, { useState } from "react";
import {
  AppBar,
  Avatar,
  Button,
  Icon,
  makeStyles,
  Toolbar,
  Typography
} from "@material-ui/core";

import Serach from "./Search";
import SignIn from "../SignIn/index";
import Dialog from "../Dialog"
import SignUp from "../SignUp/index";
import { useSelector , useDispatch} from "react-redux";
import {Logout, Adduserdata} from "./../../Action"

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
  },

  Avatar:{
    display:"flex",
    justifyContent:"space-around"
  }
});


const Index = () => {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const classes = UseStyles();
  const login = useSelector( state => state.Login)
  const dispatch = useDispatch();
  const name = useSelector( state => state.UserData.firstName)
  const type = useSelector( state => state.UserData.type)
  
  const LogOut = () => {
    dispatch(Logout())
    dispatch(Adduserdata([]))
  }
  
  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar color="inherit" className={classes.toolbar}>
        <div>
          
          <Typography color="inherit">Knowledge Base</Typography>
        </div>

        <div className={classes.right}>
          <Serach />
          {
            ! login ? <div>
          <Button style={{marginLeft:10}} onClick={ ()=> setSignUp(true) } className={classes.button} variant="outlined" color="secondary">
  
            SignUP
          </Button>
          <Button style={{marginLeft:10}} onClick={ ()=> setSignIn(true) } className={classes.button} variant="outlined" color="secondary">
  
            Login
          </Button>
          <Dialog value={signIn}  onClose={ ()=> setSignIn(false)}> <SignIn onClose={ ()=> setSignIn(false)}/> </Dialog>
          <Dialog value={signUp}  onClose={ ()=> setSignUp(false)}> <SignUp onClose={ ()=> setSignUp(false)}/> </Dialog>
          </div>

          : 
          <div  className={classes.Avatar}>
            <Button style={{marginRight:10}} color="secondary" variant="text">
              Users
            </Button>
          <Avatar  style={{backgroundColor:"#9DAAF2"}}>
            <Typography >{name[0]}</Typography>
          </Avatar>
          <Button style={{marginLeft:10}} onClick={ LogOut } className={classes.button} variant="outlined" color="secondary">
          Logout
        </Button>
        </div>

}
        </div>
       
      </Toolbar>

      
    </AppBar>
  );
};

export default Index;
