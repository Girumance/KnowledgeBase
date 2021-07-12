import { combineReducers } from "redux";
import Login from "./Login"
import UserData from "./UserData"
import Check from "./Check"
const reducers = combineReducers({
    UserData,
    Login,
    Check,
    
})

export default reducers