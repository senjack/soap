import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { login, signup } from "../appRedux/actions/AuthActions";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    textTransform: "capitalize"
  },
  input: {
    display: "none"
  }
}));

function ContainedButtons(props) {
  const classes = useStyles();

  return (
    <div>
      <Button
        id="auth-btn1"
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={e => {
          e.preventDefault();
          props.action === "login"
            ? () => props.login()
            : props.action === "signup"
            ? () => props.signup()
            : console.error("error occured");
        }}
      >
        {props.caption}
      </Button>
    </div>
  );
}

const mapStateToProps = appState => {
  console.log(appState);
  return { appState: appState };
};

const mapDispatchToProps = () => {
  return {
    // login: () => { dispatch({ type: 'login' }) },
    // signup: () => { dispatch({ type: 'signup' }) }
    login,
    signup
  };
};

//   Connect redux with react
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainedButtons);
