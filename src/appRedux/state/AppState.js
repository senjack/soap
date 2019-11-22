const AppState = {
    user:{
        email:"user@refactory.ug",
        token:null,
        error:false,
        loading:false,
        userGroup:null,
        registration:{
            success:false,
        },
        authError:{
            errorHead:null,
            errorBody:null,
            emailError:{
                status:false,
                payload:null,
            },
            password1Error:{
                status:false,
                payload:null,
            },
            password2Error:{
                status:false,
                payload:null,
            }
        },

        administrator:{},
        staff:{},
        applicant:{loggedIn:false},    
    },
}
export default AppState;