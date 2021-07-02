import { makeStyles } from "@material-ui/core";
import Presentation from "../../Presentation";
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import { Icon, Typography } from "@material-ui/core";

const UseStyles = makeStyles({

  root:{
    marginTop: "100px"
  }
})

const index = () =>{
const classes = UseStyles()
  const data = [2,3,4,5,6]

  return (
    <div className={classes.root}>
      <Typography color="textSecondary" variant="h5" > <Icon><DescriptionOutlinedIcon/></Icon> My Own Articles </Typography>
    <Presentation data={data} AddArticle={true}/>
    </div>

  )

}

export default index;