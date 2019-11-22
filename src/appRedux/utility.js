import AppState from './state/AppState';

export const updatedObject = (oldObject,updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}

export const validEmail = (email) =>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export const validPassword = (password) =>{
    // const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    // return re.test(String(password));
    password = password;
    return true;
}

export const fieldsAreEmpty = (inputs) => {
    let input = undefined;
    for(input in inputs){
        if(inputs[input]){
            if(inputs[input].value !== ""){
                return false;
            }
        }
    }
    return true;
}

export const clearFields = (inputs) => {
    let input = undefined;
    for(input in inputs){
        if(inputs[input]){
            inputs[input].value = "";
        }
    }

};

export const resetAlerts = () =>{
    let newState = AppState;
    newState.user.registration.success = false;
    newState.user.error = false;
    newState.user.authError.emailError.status = false;
    newState.user.authError.emailError.payload = null;
    newState.user.authError.password1Error.status = false;
    newState.user.authError.password1Error.payload = null;
    newState.user.authError.password2Error.status = false;
    newState.user.authError.password2Error.payload = null;    
};

export const authFormReset = (inputs) => {
    resetAlerts();
    if(!fieldsAreEmpty(inputs)){
        if(window.confirm("Are you sure you want to terminate this process?.")){
            clearFields(inputs);
        }
    }
}


export const APP_URL = 'http://127.0.0.1:8000/';