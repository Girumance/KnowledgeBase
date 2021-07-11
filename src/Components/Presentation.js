import { Paper,Grid, makeStyles } from "@material-ui/core";
import KnowledgeCard from "./KnowledgeCard"
import AddArticle from "./Home/Owner/AddArticle/AddArticle";


const Presentation = (props) => {
  

return (

  
      <Grid container spacing={5}>

        {props.AddArticle ?
        <Grid  item sm={4}>

            <AddArticle id={props.id}/>                  

        </Grid>
       : ""}

        
        {
         
            props.data.map( (data, index) => 

              <Grid key={index} item sm={4}>

                  <KnowledgeCard data ={data}/>                  

              </Grid>

             )


        }      
        
      
      </Grid>

  
)

}

export default Presentation;