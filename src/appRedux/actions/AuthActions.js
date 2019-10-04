export const Login = "successfully loged in";
export const Signup = "successfully signed up";

export const login = () => {
    return {
        type:Login
    };

}

export const signup = () => {
    return {
        type:Signup
    };

}
// const Login = {
//     applicantLogin:{
//         type,
//         payload
//     }    
// };
// export default Login;