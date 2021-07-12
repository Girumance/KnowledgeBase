import Users from "./Users";
import {Grid, makeStyles} from "@material-ui/core"
import { useEffect, useState } from "react";
import {useSelector} from "react-redux"
import axios from "axios";
const useStyles = makeStyles({

    root:{
        marginTop : "70px"
    }
})
const Index = () => {
const classes = useStyles()
const Change = useSelector( state => state.Check)
    const [data, setData] = useState([])

    useEffect( () => {

        const url = process.env.REACT_APP_URL+"profile/getAll/USER"
        axios.get(url).then( res => setData(res.data) ).then()

    }, [Change])
    return (
        <Grid container className={classes.root}>
            
            <Grid item sm={1}></Grid>
            <Grid item sm={10}><Users data={data}/></Grid>
            <Grid item sm={1}></Grid>

        </Grid>
        
    )

}

export default Index;