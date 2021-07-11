
import {Avatar, Card, IconButton, makeStyles} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import Typography from '@material-ui/core/Typography';
import Dialog from "./Dialog"
import { useState } from 'react';
import ArticleForm from './Home/Owner/AddArticle/ArticleForm';
import axios from 'axios';
import Delete from "./Delete"
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
const [edit,setEdit] = useState(false)
const [del,setDel] = useState(false)
 

const onEdit = (data)=> {
  const url= process.env.REACT_APP_URL+"property/update/"+props.data.id
  axios.post(url,data).then( res => {
    console.log(res.data)
  }).then( res => console.log(res))
}

const onDelete = ()=> {
  const url= process.env.REACT_APP_URL+"property/delete/"+props.data.id
  axios.get(url).then( res => {
    console.log(res.data)
  }).then( res => console.log(res))
}


return (


  <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.data.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.data.content}
            </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.icons}>
        <div>
          {props.data.date}
        </div>

        <div>
          <IconButton> <EditOutlinedIcon onClick={() => setEdit(true)}/> </IconButton>
          <IconButton> <DeleteOutlineOutlinedIcon onClick={ () => setDel(true)}/> </IconButton>
        </div>
      </CardActions>
      <Dialog value={edit} onClose={ () => setEdit(false)}><ArticleForm edit={true} save={onEdit}  data={props.data}/></Dialog>
      <Dialog value={del} onClose={() => setDel(false)}><Delete delete={onDelete} close={() => setDel(false)}/></Dialog>
    </Card>
)

} 

export default KnowledgeCard;