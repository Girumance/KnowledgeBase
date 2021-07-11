import {Grid} from "@material-ui/core"
import Owner from "./Owner"
import Articles from "./Articles"
import {useSelector} from "react-redux"
const Index = () =>{
const isLogedIn =  useSelector (state => state.Login)
const id = useSelector( state => state.UserData.id)
  return (
    <Grid container spacing={2}>

    <Grid item sm={1}></Grid>

    <Grid item sm={10}>

       { isLogedIn ?  <Owner id={id}/> : "" }
        <Articles/>


    </Grid>

    <Grid item sm={1}></Grid>

    </Grid>

  )

}


export default Index;