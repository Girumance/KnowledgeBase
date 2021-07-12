import axios from "axios";
import SignUp from "./SignUp"

const Index = (props) => {

    const signUp = (data) => {
        
        const url = process.env.REACT_APP_URL+"profile/signup";
        axios.post(url,data).then( res => { 
            console.log(res.data)
        props.onClose()
        }).then( res => {})
       

    }

    return (
        <SignUp  signUp={signUp}/>
    )
}

export default Index;