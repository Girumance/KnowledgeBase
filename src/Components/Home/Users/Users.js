import {TableRow, TableCell, Paper, IconButton} from "@material-ui/core"
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
const Users = ({data}) => {

    return (
        <Paper>
{
        data.map( (data, index) => 
        <TableRow key={index}>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Account Type</TableCell>
            <TableCell><IconButton><EditOutlinedIcon/></IconButton></TableCell>
            <TableCell><IconButton><DeleteOutlineOutlinedIcon/></IconButton></TableCell>
            <TableCell>Deactive</TableCell>

        </TableRow>
        

        
)
}
        </Paper>

    );

}

export default Users;