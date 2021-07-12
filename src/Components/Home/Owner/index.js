import { makeStyles } from "@material-ui/core";
import Presentation from "../../Presentation";
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import { Icon, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import axios from "axios";
import {useSelector} from "react-redux"
const UseStyles = makeStyles({

  root:{
    marginTop: "100px"
  }
})

  const Index = ({id}) =>{
  const classes = UseStyles()
  const [data,setData] = useState([])
  const check = useSelector(state => state.Check)

  useEffect(()=>{

      const url = process.env.REACT_APP_URL+"property/owner/"+id
      console.log(url)
      axios.get(url).then( res => {
        console.log(res.data)
        setData(res.data)
        
      }).then( res => { });

  },[check])

  return (
    <div className={classes.root}>
      <Typography color="textSecondary" variant="h5" > <Icon><DescriptionOutlinedIcon/></Icon> My Own Articles </Typography>
      <Presentation data={data} id={id} AddArticle={true} edit={true} />
    </div>

  )

}

export default Index;