import {Login, Signup} from '../actions/AuthActions'
import Appstate from '../state/AppState';

const AuthOneReducer = (initialState = {}, action) => {
    switch (action.type) {
        case Login:
            initialState = {
                ...Appstate,
                applicant: { loggedIn: true }
            }
            console.log("Loging in  now..........................");
            // return initialState
            break;

        case Signup:
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



// import Appstate from '../state/AppState';

// const AuthOneReducer = (initialState = {}, action) => {
//     switch (action.type) {
//         case "login":
//             initialState = {
//                 ...Appstate,
//                 applicant: { loggedIn: true }
//             }
//             console.log("Loging in  now..........................");
//             break;

//         case "signup":
//             initialState = {
//                 ...Appstate,
//                 applicant: { loggedIn: false }
//             }
//             console.log("signing up now..........................");
//             break;
        
//         case "reset":
//                 initialState = {
//                     ...Appstate,
//                     applicant: { loggedIn: false }
//                 }
//                 console.log("resetting now..........................");
//                 break;
        
//         case "toggle":
//                 initialState = {
//                     ...Appstate,
//                     applicant: { loggedIn: false }
//                 }
//                 console.log("toggling now..........................");
//                 break;
//         default:
//             break;
//     }

//     return initialState;
// }
// export default AuthOneReducer;
