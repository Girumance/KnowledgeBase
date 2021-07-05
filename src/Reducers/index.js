import { combineReducers } from "redux";
import Login from "./Login"
import UserData from "./UserData"
const reducers = combineReducers({
    UserData,
    Login,
    
})

export default reducers