import {Grid} from "@material-ui/core"
import Owner from "./Owner"
import Articles from "./Articles"
const index = () =>{

  return (
    <Grid container spacing={2}>

    <Grid item sm={1}></Grid>

    <Grid item sm={10}>

        <Owner/>
        <Articles/>


    </Grid>

    <Grid item sm={1}></Grid>

    </Grid>

  )

}


export default index;