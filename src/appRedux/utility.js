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

export const authFormReset = (inputs) => {
    let input = undefined;

    if(!fieldsAreEmpty(inputs)){
        if(window.confirm("Are you sure you want to terminate this process?.")){
            for(input in inputs){
                if(inputs[input]){
                    inputs[input].value = "";
                }
            }
        
        }
    }
}


export const APP_URL = 'http://127.0.0.1:8000/';