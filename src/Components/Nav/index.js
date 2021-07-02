import react from "react";
import {
  AppBar,
  Button,
  Icon,
  makeStyles,
  Toolbar,
  Typography
} from "@material-ui/core";

import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Serach from "./Search";

const UseStyles = makeStyles({
  root: {
    backgroundColor: "#FEFEFA"
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
  }
});

const index = () => {
  const classes = UseStyles();
  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <div>
          
          <Typography color="textSecondary">Knowledge Base</Typography>
        </div>

        <div className={classes.right}>
          <Serach />
          <Button className={classes.button} variant="outlined" color="primary">
            {" "}
            Login{" "}
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default index;
