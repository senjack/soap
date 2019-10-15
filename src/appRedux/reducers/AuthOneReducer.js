// import Appstate from "../state/AppState";
// import { SIGNUP, LOGIN, RESET, TOGGLE } from "../actions/AuthActions";

// const AuthOneReducer = (initialState = {}, action) => {
//   const AuthForm1 = document.getElementById("AuthForm1");

//   switch (action.type) {
//     case SIGNUP:
//       initialState = {
//         ...Appstate,
//         applicant: { loggedIn: false }
//       };
//       console.log("signing up now..........................");
//       break;

//     case LOGIN:
//       initialState = {
//         ...Appstate,
//         applicant: { loggedIn: true }
//       };
//       console.log("Loging in  now..........................");
//       console.log(AuthForm1);
//       break;

//     case RESET:
//       initialState = {
//         ...Appstate,
//         applicant: { loggedIn: false }
//       };
//       console.log("resetting now..........................");
//       break;

//     case TOGGLE:
//       initialState = {
//         ...Appstate,
//         applicant: { loggedIn: false }
//       };
//       console.log("toggling now..........................");
//       break;
//     default:
//       break;
//   }

//   return initialState;
// };
// export default AuthOneReducer;
