import {TableRow, TableCell, Paper, IconButton, Button} from "@material-ui/core"
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import Dialog from "./../Dialog"
import Form from "./form";
import { useState } from "react";
import axios from "axios";
import {Change} from "./../../Action"
import { useDispatch } from "react-redux";
const Users = ({data}) => {
const [edit,setEdit] = useState(false)
const [pass, setPass] = useState({})
const dispatcher = useDispatch();
const update = (data) => {

    const url = process.env.REACT_APP_URL+"profile/update"
   // axios.post( url, data).then( res => console.log(res.data)).then(res => {})
   console.log(data)

}

const onDeactive = (id)=> {
    const url = process.env.REACT_APP_URL+"profile/disable/"+id
    axios.get(url).then(res => dispatcher(Change())).then()
}

const onActive = (id) => {
    const url = process.env.REACT_APP_URL+"profile/enable/"+id
    axios.get(url).then(res => dispatcher(Change())).then()
}

const onDelete = (id) => {

    const url = process.env.REACT_APP_URL+"profile/delete/"+id
    axios.get(url).then(res => dispatcher(Change())).then()
}
console.log(data)  
return (
        <Paper>
{
    
        data.map( (data, index) => 
        <TableRow key={index}>
            <TableCell>{index+1}</TableCell>
            <TableCell>{data.firstName + " " + data.lastName  }</TableCell>
            <TableCell>{data.email}</TableCell>
            <TableCell>{data.type}</TableCell>
            <TableCell><IconButton onClick={()=> {setPass(data); setEdit(true)}}><EditOutlinedIcon/></IconButton></TableCell>
            <TableCell><IconButton onClick={() => onDelete(data.id)}><DeleteOutlineOutlinedIcon/></IconButton></TableCell>
            <TableCell>
                {
                    
                    data.accountEnabled ? <Button onClick={() => onDeactive(data.id)} variant="outlined" color="secondary">Deactive</Button> :
                    <Button onClick={() => onActive(data.id)} variant="outlined" color="primary">Active</Button>
                }
                
                </TableCell>
        </TableRow>
        

        
)
}
<Dialog  value={edit} onClose={ () => setEdit(false)}><Form  update={update} data={pass}/></Dialog>
                    
        </Paper>

    );

}

export default Users;