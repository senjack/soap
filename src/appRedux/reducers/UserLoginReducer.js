import Appstate from '../state/AppState';

const UserLoginReducer = (initialState = {}, action) => {
    switch (action.type) {
        case "login":
            initialState = {
                ...Appstate,
                applicant: { loggedIn: true }
            }
            // alert("You have loged in");
            console.log("logging in now.........")
            break;

        case "signup":
            initialState = {
                ...Appstate,
                applicant: { loggedIn: false }
            }
            // alert("You have signed up");
            console.log("signing up now..........................");
            break;
        default:
            break;
    }

    return initialState;
}
export default UserLoginReducer;
