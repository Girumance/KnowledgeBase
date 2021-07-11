import { Button, makeStyles, Paper, Typography } from "@material-ui/core"
const useStyles = makeStyles({
    root:{
        width:200,
        height:100,
        padding:10
    }
})
const Delete = (props) => {

   const onNo = () => {
        props.close();
    }

    const onYes = () => {
        props.delete();
        onNo();
    }
const classes = useStyles()
    return (
        <Paper className={classes.root}>
            <Typography variant="h5" color="textSecondary" align="center"> Are You Sure?!</Typography>
            <Typography align="center"><Button onClick={ onYes} variant="outlined" color="primary">YES</Button> <Button onClick={onNo} variant="outlined" color="primary">NO</Button></Typography>
        </Paper>
    )
}

export default Delete;