
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { connect } from 'react-redux';

import {signup,login} from '../../appRedux/actions/AuthActions';

const useStyles = makeStyles(theme => ({
  button: {
    // margin: theme.spacing(1),
    backgroundColor:"#254061",
    border:"1px solid #376092",
    textTransform: "capitalize",
    borderRadius:"2px",
    width:"100%",
    textShadow:"1px 1px #000",
  },
  input: {
    display: 'none',
  },
}));

function AppDrawerButton(props) {
  const classes = useStyles();

  return (
    <div style={{marginBottom:"10px"}}>
      <Button id="app-drawer-button" variant="contained" color="primary" className={classes.button} onClick={(e) => { e.preventDefault();props.action(e)}}>{props.caption}</Button>
    </div>
  )
}

// Mapping Redux managed state to react component state
const mapStateToProps = (appState) => {
  return { appState: appState };
}

// Mapping Redux Dispatch to react component state
const mapDispatchToProps = (dispatch) => {
  return {
    signup,
    login,
  }
}

//   Connect react component to redux
export default connect(mapStateToProps, mapDispatchToProps())(AppDrawerButton);
