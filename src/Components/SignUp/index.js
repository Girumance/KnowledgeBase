import axios from "axios";
import SignUp from "../SignUp"

const Index = () => {

    const signUp = (data) => {
        
        const url = process.env.REACT_APP_URL+"signup";
        axios.post(url,data).then( res => { console.log(res.data)}).then( res => {})

    }

    return (
        <SignUp />
    )
}

export default Index;