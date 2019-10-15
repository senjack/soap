import * as actionTypes from "./AuthActionTypes";

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
