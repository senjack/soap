//Action types
export const LoginAction = "login";
export const SignupAction = "signup";

//Action creators
export const login = () => {
  return {
    type: LoginAction
  };
};

export const signup = () => {
  return {
    type: SignupAction
  };
};

// const Login = {
//     applicantLogin:{
//         type,
//         payload
//     }
// };
// export default Login;
