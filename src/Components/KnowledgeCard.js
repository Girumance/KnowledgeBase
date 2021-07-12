
import { Card, IconButton, makeStyles} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import Typography from '@material-ui/core/Typography';
import Dialog from "./Dialog"
import { useState } from 'react';
import ArticleForm from './Home/Owner/AddArticle/ArticleForm';
import axios from 'axios';
import Delete from "./Delete"
import {useDispatch, useSelector} from "react-redux"
import {Change} from "./../Action"
const useStyles = makeStyles({
  root: {
    //maxWidth: 345,
    
    maxHeight:":42vh"
  },
  icons:{

    display:"flex",
    justifyContent:"space-between",
    alignItems:"flex-end"
  }
})

const KnowledgeCard = (props)=> {
const classes = useStyles()
const [edit,setEdit] = useState(false)
const [del,setDel] = useState(false)
const dispatch = useDispatch()
const type = useSelector( state => state.UserData.type)


 

const onEdit = (data)=> {
  const url= process.env.REACT_APP_URL+"property/update/"+props.data.id
  axios.post(url,data).then( res => {
    dispatch(Change())
  }).then( res => console.log(res))
}

const onDelete = ()=> {
  const url= process.env.REACT_APP_URL+"property/delete/"+props.data.id
  axios.get(url).then( res => {
    dispatch(Change())
  }).then( res => console.log(res))
}


return (


  <Card elevation={3} className={classes.root}>
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
          { props.edit || props.admin?
          <div className={classes.icons}>
            <Typography>{props.data.status}</Typography>
          <IconButton> <EditOutlinedIcon onClick={() => setEdit(true)}/> </IconButton>
          <IconButton> <DeleteOutlineOutlinedIcon onClick={ () => setDel(true)}/> </IconButton>
          </div>
          : ""

          }
        </div>
      </CardActions>
      
      <Dialog value={edit} onClose={ () => setEdit(false)}><ArticleForm edit={true} save={onEdit}  data={props.data}/></Dialog>
      <Dialog value={del} onClose={() => setDel(false)}><Delete delete={onDelete} close={() => setDel(false)}/></Dialog>
    </Card>
)

} 

export default KnowledgeCard;