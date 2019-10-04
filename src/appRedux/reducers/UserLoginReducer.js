import Appstate from '../state/AppState';

const UserLoginReducer = (initialState = {},action) => {
    switch (action.type) {
        case "login":
            initialState= {
                ...Appstate,
                applicant:{loggedIn:true}
            }
            console.log("Loging in  now..........................");
            break;

        case "signup":
                initialState= {
                    ...Appstate,
                    applicant:{loggedIn:false}
                }
        console.log("signing up now..........................");
            break;
        default:
            break;
    }

    return initialState;
}
export default UserLoginReducer;
