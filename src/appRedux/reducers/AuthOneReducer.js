import Appstate from '../state/AppState';
import {LoginAction, SignupAction} from '../actions/AuthActions'

const AuthOneReducer = (initialState = {}, action) => {
    switch (action.type) {
        case LoginAction:
            initialState = {
                ...Appstate,
                applicant: { loggedIn: true }
            }
            console.log("Loging in  now..........................");
            break;

        case SignupAction:
            initialState = {
                ...Appstate,
                applicant: { loggedIn: false }
            }
            console.log("signing up now..........................");
            break;
        
        case "reset":
                initialState = {
                    ...Appstate,
                    applicant: { loggedIn: false }
                }
                console.log("resetting now..........................");
                break;
        
        case "toggle":
                initialState = {
                    ...Appstate,
                    applicant: { loggedIn: false }
                }
                console.log("toggling now..........................");
                break;
        default:
            break;
    }

    return initialState;
}
export default AuthOneReducer;
