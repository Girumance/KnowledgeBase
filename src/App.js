
import Navbar from "./Components/Nav/index"
import Home from "./Components/Home"
import Users from "./Components/Users"
import { makeStyles } from "@material-ui/core";
import { BrowserRouter as Router} from "react-router-dom"
import {Switch, Route} from "react-router"
const useStyles  = makeStyles({
  root:{
    backgroundColor:"#e7e7e9"
  }
})
export default function App() {
  const classes = useStyles()
  return (
    
    <Router>
    <div >
   <Navbar/>
   <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/User" exact component={Users}/>
  </Switch>
  </div>
  </Router>
  );
}
