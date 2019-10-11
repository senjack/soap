export const SIGNUP = "signup";
export const LOGIN = "login";
export const RESET = "reset";
export const TOGGLE = "toggle";

export const signup = () => {
  return {
    type: SIGNUP
  };
};

export const login = () => {
  return {
    type: LOGIN
  };
};

export const reset = () => {
  return {
    type: RESET
  };
};

export const toggle = () => {
  return {
    type: TOGGLE
  };
};
