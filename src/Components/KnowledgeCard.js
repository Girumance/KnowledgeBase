
import {Avatar, Card, IconButton, makeStyles} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  root: {
    //maxWidth: 345,
    
    maxHeight:":42vh"
  },
  icons:{

    display:"flex",
    justifyContent:"space-between"
  }
})

const KnowledgeCard = (props)=> {
const classes = useStyles()
return (

  <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.icons}>
        <div>
          12/6/2021
        </div>

        <div>
          <IconButton> <EditOutlinedIcon/> </IconButton>
          <IconButton> <DeleteOutlineOutlinedIcon/> </IconButton>
        </div>
      </CardActions>
    </Card>
)

} 

export default KnowledgeCard;