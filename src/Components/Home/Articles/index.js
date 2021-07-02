import Presentation from "../../Presentation";
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import { Icon, Typography } from "@material-ui/core";
const index = ()=> {
        const data =[1,2,3,4,5]
    return (
        <div style={{marginTop:"10vh"}}>
           <Typography color="textSecondary" variant="h5" > <Icon><DescriptionOutlinedIcon/></Icon> Other Articles </Typography>  
        <Presentation data={data} AddArticle={false}/>

        </div>
    )
}

export default index;