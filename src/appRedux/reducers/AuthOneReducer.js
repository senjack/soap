import AppState from '../state/AppState';
import * as actionTypes from '../actions/AuthActionTypes';
import {authSignup} from '../actions/AuthActions';
import {updatedObject,authFormReset,resetAlerts} from '../utility';


const authStart = (state)=>{
    return updatedObject(state,
        {
            error:null,
            loading:true
        }
    );
}

const authSuccess = (state,action)=>{
    return updatedObject(state,
        {
            token: action.token,
            error:null,
            loading:false
        }
    );
}

const authFail = (state,action)=>{
    return updatedObject(state,
        {
            error:action.error,
            loading:false
        }
    );
}

const authLogout = (state,action)=>{
    return updatedObject(state,
        {
            token: null,
        }
    );
}


const AuthOneReducer = (initialState = AppState.user, action) => {

    const AuthForm1 = document.getElementById('AuthForm1');

    switch (action.type) {
        case actionTypes.SIGNUP:
            console.log("signing up now..........................");
            authSignup(AuthForm1.AuthForm1Input1,AuthForm1.AuthForm1Input2,AuthForm1.AuthForm1Input2)();
            break;

        case actionTypes.LOGIN:
            console.log("Loging in  now..........................");
            break;
                
        case actionTypes.RESET:
                console.log("resetting now..........................");
                authFormReset(
                    [
                        AuthForm1.AuthForm1Input1,
                        AuthForm1.AuthForm1Input2,
                        AuthForm1.AuthForm1Input3
                    ]
                    );
                break;
        
        case actionTypes.TOGGLE:
                resetAlerts();
                console.log("toggling now..........................");
                break;

        case actionTypes.AUTH_START: 
            authStart(initialState);
            break;

        case actionTypes.AUTH_SUCCESS: 
            authSuccess(initialState,action);
            break;

        case actionTypes.AUTH_FAIL: 
            authFail(initialState,action);
            break;

        case actionTypes.AUTH_LOGOUT: 
            authLogout(initialState,action);
            break;

        default:
            return AppState;
    }
    
    initialState = {
        ...AppState,
        ...initialState
    };

    // console.log(initialState);
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
