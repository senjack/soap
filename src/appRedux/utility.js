import AppState from './state/AppState';

export const updatedObject = (oldObject,updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
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
    let temporaryState = AppState;
    temporaryState.user.registration.success = false;
    temporaryState.user.error = false;
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