import axios from "axios"
import { useDispatch } from "react-redux"
import {Adduserdata, Login} from "./../../Action"
import SignIn from "./Signin"
const Index =  (props) => {
    const dispatch = useDispatch();
    const signInClick = (data) => {
        
            const url = process.env.REACT_APP_URL+"login"
            console.log(url)
            axios.post(url, data).then( res => {
              
                dispatch(Adduserdata(res.data))
                dispatch(Login())
                
                
            }).then( (error) => {
                console.log(error)
            }
            )
        }
        
        
    

    return(
        <SignIn click={signInClick} />
    )

}

export default Index;