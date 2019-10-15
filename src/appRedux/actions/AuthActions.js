import * as actionTypes from './AuthActionTypes';
import axios from 'axios';
import {APP_URL} from '../utility';
import AppStore from '../store/AppStore';
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
        type: actionTypes.AUTH_START
    };
}

export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_FAIL,
        token:token
    };
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error:error
    };
}

export const authLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
}

const checkAuthTimeout = expirationTime =>{
    return dispatch => {
        setTimeout(()=>{
            dispatch(logout());
        },expirationTime * 1000);
    }
}

export const logout = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');

    return {
        type:actionTypes.AUTH_LOGOUT
    };
}

export const Validate=(email, password) =>{

};  

export const authLogin = (email, password) => {
    return dispatch => {
        AppStore.dispatch(authStart());
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
        authStart();
        axios.post((APP_URL+'rest-auth/registration/'), {
            "email": email,
            "password1": password1,
            "password2": password2,            
        }).then(res =>{
            console.log(res);
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600*1000);
            localStorage.setItem('token',token);
            localStorage.setItem('expirationDate',expirationDate);
            authSuccess(token);
            checkAuthTimeout(3600);
        }).catch(err => {
            console.log(err);
            console.error(err);
            authFail(err);
        })

    };
}

