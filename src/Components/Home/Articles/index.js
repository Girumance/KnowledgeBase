import Presentation from "../../Presentation";
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import { Icon, Typography } from "@material-ui/core";
const index = ()=> {
        const data =[{name:"fdjlkjlfdf",content:"fdjkjlfdd", date:"1"},{name:"fdjlkjlfdf",content:"fdjkjlfdd", date:"1"},{name:"fdjlkjlfdf",content:"fdjkjlfdd", date:"1"}]
    return (
        <div style={{marginTop:"10vh"}}>
           <Typography color="textSecondary" variant="h5" > <Icon><DescriptionOutlinedIcon/></Icon> Other Articles </Typography>  
        <Presentation data={data} AddArticle={false}/>

        </div>
    )
}

export default index;