
import Navbar from "./Components/Nav/index"
import Home from "./Components/Home"
import { makeStyles } from "@material-ui/core";
const useStyles  = makeStyles({
  root:{
    backgroundColor:"#e7e7e9"
  }
})
export default function App() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
   <Navbar/>
  <Home/>
  </div>
  );
}
