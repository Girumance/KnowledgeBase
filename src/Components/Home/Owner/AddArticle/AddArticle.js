import {Card, makeStyles, Grid, Avatar, Typography, CardContent, CardActionArea} from "@material-ui/core"
import { FormatAlignCenter } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import { useState } from "react";
import ArticleForm from "./ArticleForm";
import Dialog from "./../../../Dialog"
import axios from "axios";
import {useDispatch} from "react-redux"
import {Change} from "./../../../../Action"
const useStyles = makeStyles( theme => ({
    root: {
      //: 345,
      
      maxHeight:":42vh"
    },
    

     avatar: {
          width: theme.spacing(9),
          height: theme.spacing(9),
        },

        center:{
            
            display:"flex",
            justifyContent:'center'
        },
        icon:{
            
            color:"Green"
    }
      
      
      
  }))
const AddArticle = ({id}) => {
    const [click, setClick] = useState(false)
    const classes = useStyles();
    const dispatch = useDispatch();

    const onSave = (data) => {

        const url = process.env.REACT_APP_URL+"property/save"

        console.log(data)
        axios.post(url,data).then( res => dispatch(Change())).then()
    }

     return(
        <Card onClick={ () => setClick(true)} className={classes.root}>
            <CardActionArea>
            <CardContent>
                            <Grid container justify="center" >
                <Grid item sm={12}>
                    
                    <div className={classes.center}>    
                    <Avatar align="center" className={classes.avatar}>
                        <AddIcon fontSize="large"  className={classes.icon}/>
                    </Avatar>
                    </div>
                    

                    <Typography color="textPrimary" variant="h6" align="center">Add Article</Typography>
                    <Typography color="textSecondary" variant="body" align="center">Create new article in your drafts section where you can add details or edit article.</Typography>
                    
                </Grid>
            </Grid>
            

            </CardContent>
            </CardActionArea>
            <Dialog value={click} onClose={() => setClick(false)}><ArticleForm save={onSave} id={id}/></Dialog>
        </Card>
     )
        
                   
            

}

export default AddArticle;