import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {connect} from 'react-redux';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        textTransform: "capitalize"
        
    },
    input: {
        display: 'none',
    },
}));

function ContainedButtons(props) {
    const classes = useStyles();

    return (
        <div>
            <Button id="auth-btn1" variant="contained" color="primary" className={classes.button} onClick={(e)=>{e.preventDefault();props.action === "login" ? props.login():props.action === "signup" ? props.signup():console.error('error occured');}}>
                {props.caption}</Button>
                </div>
 )}

//  to be put by Lambert
 const mapStateToProps = (appState) =>{
  console.log(appState)
    return {appState:appState};
  }

  //  to be put by Irene
  const mapDispatchToProps = (dispatch) => {
    return {
      login: ()=>{ dispatch({type: 'login'}) },
      signup: ()=>{ dispatch({type: 'signup'}) }      
    }
  }

//   Connect the 
  export default connect(mapStateToProps,mapDispatchToProps)(ContainedButtons);
