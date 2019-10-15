import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    textTransform: "none"
  },
  input: {
    display: "none"
  }
}));

export default function ContainedButtons(props) {
  const classes = useStyles();

  return (
    <div>
      <Button
        id="auth-btn2"
        variant="contained"
        color="primary"
        action={props.action}
        className={classes.button}
      >
        {props.caption}
      </Button>
    </div>
  );
}
