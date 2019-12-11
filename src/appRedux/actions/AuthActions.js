import * as actionTypes from './AuthActionTypes';
import axios from 'axios';
import {APP_URL,clearFields,resetAlerts} from '../utility';
import AppStore from '../store/AppStore';
import AppState from '../state/AppState';
// import {push} from 'react-router-redux';

export const signup = () => {
  return {
    type: actionTypes.SIGNUP
  };
};

export const login = () => {
  return {
    type: actionTypes.LOGIN
  };
};

export const reset = () => {
  return {
    type: actionTypes.RESET
  };
};

export const toggle = () => {
  return {
    type: actionTypes.TOGGLE
  };
};

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
        payload:null
    };
}

export const authSuccess = token => {
  return {
    type: actionTypes.AUTH_FAIL,
    token: token
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const authLogout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("expirationDate");
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");

  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const Validate = (email, password) => {};

export const authLogin = (email, password) => {
    return dispatch => {
        // AppStore.dispatch(authStart());
        axios.post(APP_URL+'rest-auth/login/', {
            "email": email,
            "password": password
        }).then(res =>{
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600*1000);
            localStorage.setItem('token',token);
            localStorage.setItem('expirationDate',expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
        }).catch(err => {
            dispatch(authFail(err))
        })

    };
}

export const authSignup = (email, password1, password2) => {
    return dispatch => {
        resetAlerts();
        axios.post((APP_URL+'rest-auth/registration/'), {
            "email": email.value,
            "password1": password1.value,
            "password2": password2.value,            
        }).then(res =>{
            if(res.status === 201 && res.statusText === "Created"){
                console.clear();
                const token = res.data.key;
/*                 const expirationDate = new Date(new Date().getTime() + 3600*1000);
                localStorage.setItem('token',token);
                localStorage.setItem('expirationDate',expirationDate);
                authSuccess(token);
                checkAuthTimeout(3600); */
                let temporaryState = AppState;
                temporaryState.user.registration.success = true;
                clearFields([email, password1, password2]);
                AppStore.dispatch(authSuccess(token));
                console.clear();
    
            }

        }).then(axios.post((APP_URL+'rest-auth/logout/'))).catch(err => {
            console.clear();
            let temporaryState = AppState;
            temporaryState.user.error = true;
            temporaryState.user.authError.errorHead = "Signup Failed!";
            temporaryState.user.authError.errorBody = "Email or password is incorrect";
            AppStore.dispatch(authFail(err));
            console.clear();
            // console.log(err);
            // console.error(err);
        })

    };
}

