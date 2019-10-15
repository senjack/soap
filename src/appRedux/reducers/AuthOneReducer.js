import AppState from "../state/AppState";
import * as actionTypes from "../actions/AuthActionTypes";
import { authSignup } from "../actions/AuthActions";
import { updatedObject, authFormReset } from "../utility";

const authStart = (state, action) => {
  return updatedObject(state, {
    error: null,
    loading: true
  });
};

const authSuccess = (state, action) => {
  return updatedObject(state, {
    token: action.token,
    error: null,
    loading: false
  });
};

const authFail = (state, action) => {
  return updatedObject(state, {
    error: action.error,
    loading: false
  });
};

const authLogout = (state, action) => {
  return updatedObject(state, {
    token: null
  });
};

const AuthOneReducer = (initialState = AppState.user, action) => {
  //   switch (action.type) {
  //     case SIGNUP:
  //       initialState = {
  //         ...Appstate,
  //         applicant: { loggedIn: false }
  //       };
  //       console.log("signing up now..........................");
  //       break;
  const AuthForm1 = document.getElementById("AuthForm1");
  switch (action.type) {
    case actionTypes.SIGNUP:
      // initialState = {
      //     ...Appstate,
      //     applicant: { loggedIn: false }
      // }
      // console.log("signing up now..........................");

      authSignup(
        AuthForm1.AuthForm1Input1.value,
        AuthForm1.AuthForm1Input2.value,
        AuthForm1.AuthForm1Input3.value
      )();
      break;

    case actionTypes.LOGIN:
      // initialState = {
      //     ...Appstate,
      //     applicant: { loggedIn: true }
      // }
      console.log("Loging in  now..........................");
      break;

    case actionTypes.RESET:
      authFormReset([
        AuthForm1.AuthForm1Input1,
        AuthForm1.AuthForm1Input2,
        AuthForm1.AuthForm1Input3
      ]);
      // console.log("resetting now..........................");
      break;

    case actionTypes.TOGGLE:
      // initialState = {
      //     ...Appstate,
      //     applicant: { loggedIn: false }
      // }
      console.log("toggling now..........................");
      break;

    case actionTypes.AUTH_START:
      authStart(initialState, action);
      break;

    case actionTypes.AUTH_SUCCESS:
      authSuccess(initialState, action);
      break;

    case actionTypes.AUTH_FAIL:
      authFail(initialState, action);
      break;

    case actionTypes.AUTH_LOGOUT:
      authLogout(initialState, action);
      break;

    default:
      return AppState;
  }

  initialState = {
    ...AppState,
    ...initialState
  };

  // console.log(initialState);
  return initialState;
};
export default AuthOneReducer;
