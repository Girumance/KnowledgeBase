import Presentation from "../../Presentation";
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import { Icon, Typography } from "@material-ui/core";
import {useSelector} from "react-redux"
import axios from "axios"
import {useEffect, useState} from "react"
const Index = ()=> {
    
    const [data,setData] = useState([])
    const check = useSelector(state => state.Check)
    const type = useSelector (state => state.UserData.type)
  
    useEffect(()=>{
  
        const url = type == "ADMIN" ? process.env.REACT_APP_URL+"property/All" : process.env.REACT_APP_URL+"property/published"
        
        axios.get(url).then( res => {
          console.log(res.data)
          setData(res.data)
          
        }).then( res => { });
  
    },[check])
  
    return (
        <div style={{marginTop:"10vh"}}>
           <Typography color="textSecondary" variant="h5" > <Icon><DescriptionOutlinedIcon/></Icon> Other Articles </Typography>  
        <Presentation data={data} AddArticle={false} edit={false} admin={type==="ADMIN"?true:false }/>

        </div>
    )
}

export default Index;