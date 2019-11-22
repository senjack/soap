import * as actionTypes from './AuthActionTypes';
import axios from 'axios';
import { APP_URL, clearFields, resetAlerts } from '../utility';
import AppStore from '../store/AppStore';
import AppState from '../state/AppState';
import { validEmail, validPassword } from '../utility';
// import {push} from 'react-router-redux';

export const signup = () => {
    return {
        type: actionTypes.SIGNUP
    };
}

export const login = () => {
    return {
        type: actionTypes.LOGIN
    };
}

export const reset = () => {
    return {
        type: actionTypes.RESET
    };
}

export const toggle = () => {
    return {
        type: actionTypes.TOGGLE
    };
}

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
        payload: null
    };
}

export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_FAIL,
        token: token
    };
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
}

export const authLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
}

const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');

    return {
        type: actionTypes.AUTH_LOGOUT
    };
}

export const isValidForSignup = (email, password1, password2) => {
    let temporaryState = AppState;

    if (email === "") {
        temporaryState.user.error = true;
        temporaryState.user.authError.emailError.status = true;
        temporaryState.user.authError.errorHead = "Signup Error!";
        temporaryState.user.authError.errorBody = "Email field can't be empty.";
        temporaryState.user.authError.emailError.payload = "This field is required!";
        return false;
    };
    if (!validEmail(email)) {
        temporaryState.user.error = true;
        temporaryState.user.authError.emailError.status = true;
        temporaryState.user.authError.errorHead = "Signup Error!";
        temporaryState.user.authError.errorBody = "Invalid email adress!";
        temporaryState.user.authError.emailError.payload = "The email address entered is invalid";
        return false;
    }
    if (password1 === "") {
        temporaryState.user.error = true;
        temporaryState.user.authError.errorHead = "Signup Error!";
        temporaryState.user.authError.errorBody = "Password field can't be empty.";
        temporaryState.user.authError.password1Error.status = true;
        temporaryState.user.authError.password1Error.payload = "This field is required!";
        return false;
    };
    if (!validPassword(password1)) {
        temporaryState.user.error = true;
        temporaryState.user.authError.errorHead = "Signup Error!";
        temporaryState.user.authError.errorBody = "Invalid password.";
        temporaryState.user.authError.password1Error.status = true;
        temporaryState.user.authError.password1Error.payload = "A valid password must: contain atleast one Alphabet character, one numeric character, one special character and must be atleast 8 characters long";
        return false;
    }
    if (password2 === "") {
        temporaryState.user.authError.errorHead = "Signup Error!";
        temporaryState.user.authError.errorBody = "Password field can't be empty.";
        temporaryState.user.authError.password2Error.status = true;
        temporaryState.user.authError.password2Error.payload = "This field is required!";
        return false;
    };
    // if(password1 === password2){
    //     temporaryState.user.authError.errorHead = "Signup Error!";
    //     temporaryState.user.authError.errorBody = "Password mis-match.";
    //     temporaryState.user.authError.password2Error.status = true;
    //     temporaryState.user.authError.password2Error.payload = "Password1 and password2 are seem not to be the same!";
    //     return false;
    // };    
    return true;
};

export const authLogin = (email, password) => {
    return dispatch => {
        // AppStore.dispatch(authStart());
        axios.post(APP_URL + 'rest-auth/login/', {
            "email": email,
            "password": password
        }).then(res => {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
        }).catch(err => {
            dispatch(authFail(err))
        })

    };
}

export const authSignup = (email, password1, password2) => {
    resetAlerts();
    console.clear();

    if (isValidForSignup(email.value, password1.value, password2.value) === false) {
        console.error("Invalid.....");
        return dispatch => {
            return null;
        };
    }


    return dispatch => {
        axios.post((APP_URL + 'rest-auth/registration/'), {
            "email": email.value,
            "password1": password1.value,
            "password2": password2.value,
        }).then(res => {
            if (res.status === 201 && res.statusText === "Created") {
                console.clear();
                /*                 const token = res.data.key;
                                const expirationDate = new Date(new Date().getTime() + 3600*1000);
                                localStorage.setItem('token',token);
                                localStorage.setItem('expirationDate',expirationDate);
                                authSuccess(token);
                                checkAuthTimeout(3600); */
                let temporaryState = AppState;
                temporaryState.user.registration.success = true;
                clearFields([email, password1, password2]);
                // AppStore.dispatch(authSuccess(token));
                AppStore.dispatch(authSuccess(null));
                console.clear();

            }

        }).then(axios.post((APP_URL + 'rest-auth/logout/'))).catch(err => {
            console.clear();
            let temporaryState = AppState;
            temporaryState.user.error = true;
            temporaryState.user.authError.errorHead = "Signup Failed!";
            let newErr = err.response.data.email[0] ?
                err.response.data.email[0]
                :
                "Problem encountered while signing up. please try again";
            temporaryState.user.authError.errorBody = "Email already Taken";
            temporaryState.user.authError.emailError.status = true;
            temporaryState.user.authError.emailError.payload = newErr;
            AppStore.dispatch(authFail(err));
            console.clear();
            // console.error(err);
        })

    };
}

