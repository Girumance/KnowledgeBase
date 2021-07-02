import {Card, makeStyles, Grid, Avatar, Typography, CardContent, CardActionArea} from "@material-ui/core"
import { FormatAlignCenter } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
const useStyles = makeStyles( theme => ({
    root: {
      maxWidth: 345,
      
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
const AddArticle = () => {

    const classes = useStyles();

     return(
        <Card className={classes.root}>
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
        </Card>
     )
        
                   
            

}

export default AddArticle;