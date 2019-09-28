import Appstate from '../state/AppState';

const initialState ={};
const UserLoginReducer = (initialState = Appstate,action) => {
    switch(action.type){
        case "login":
            console.log("Logging in now..........................");
            break;
        
        case "signup":
            console.log("signing up now..........................");
            break;
        default:
            break;
    }

    return {};
}
export default UserLoginReducer;
