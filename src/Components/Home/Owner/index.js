import { makeStyles } from "@material-ui/core";
import Presentation from "../../Presentation";
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import { Icon, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import axios from "axios";

const UseStyles = makeStyles({

  root:{
    marginTop: "100px"
  }
})

  const Index = ({id}) =>{
  const classes = UseStyles()
  const [data,setData] = useState([])

  useEffect(()=>{

      const url = process.env.REACT_APP_URL+"property/owner/"+id
      console.log(url)
      axios.get(url).then( res => {
        console.log(res.data)
        setData(res.data)
        
      }).then( res => { });

  },[])

  return (
    <div className={classes.root}>
      <Typography color="textSecondary" variant="h5" > <Icon><DescriptionOutlinedIcon/></Icon> My Own Articles </Typography>
      <Presentation data={data} id={id} AddArticle={true} />
    </div>

  )

}

export default Index;