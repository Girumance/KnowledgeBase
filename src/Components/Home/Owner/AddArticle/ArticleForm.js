import { Typography, Paper, TextField, makeStyles, Grid } from "@material-ui/core"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {Button} from "@material-ui/core"
import {react, useEffect, useState} from "react"
import { PinDropRounded } from "@material-ui/icons";
const useStyles = makeStyles({
    root:{
        padding:"30px",
        
    }
})

const ArticleForm = ( props ) => {
const classes = useStyles();
const [value, setValue] = useState("Publish");
const [name, setName] = useState("")
const [content, setContent] = useState("")
const [tag, setTag] = useState("")

const onSave = () => {

    const data ={
        name,
        content,
        tag,
        ownerId:props.id
    }

    props.save(data)

}

useEffect( ()=> {
    
    if(props.edit){
    setName(props.data.name)
    setContent(props.data.content)
    setTag(props.data.tag)
}
},[])

console.log(props.data)

    return (
        
        <Paper className={classes.root}>
            <Typography variant="h4" color="textSecondary">Add Article</Typography><hr/>
            <Grid container direction="column" spacing={2}>
                <Grid item sm={12}>
                <TextField value={name} onChange={ event => {setName(event.target.value)}} placeholder="Name" variant="outlined"/>

                </Grid>

                <Grid item sm={12}>
                <TextField value={content} onChange={ event => {setContent(event.target.value)}} multiline rows={3} placeholder="Content" variant="outlined"/>

                </Grid>

                <Grid item sm={12}>
                <TextField value={tag} onChange={ event => {setTag(event.target.value)}} placeholder="Tag" variant="outlined"/>

                </Grid>

                <Grid item sm={12}>

                <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={(event) => setValue(event.target.value)}>
        <FormControlLabel value="Publish" control={<Radio />} label="Publish" />
        <FormControlLabel value="Draft" control={<Radio />} label="Draft" />
       
      </RadioGroup>
    </FormControl>
                </Grid>

                <Grid item sm={12}>
                    <Button onClick={ () => onSave()} variant="outlined" color="primary" >Save</Button>
                </Grid>



            </Grid>

        </Paper>

    )
}

export default ArticleForm;