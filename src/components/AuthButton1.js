import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {connect} from 'react-redux';
import {login} from "../appRedux/actions/AuthActions";


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
            <Button id="auth-btn1" variant="contained" color="primary" className={classes.button} onClick={()=>alert('just')}>
                {props.caption}</Button>
                </div>
 )}

//  to be put by Lambert
 const mapStateToProps = (appState) =>{
    return {appState:appState};
  }

  //  to be put by Irene
  const mapDispatchToProps = () => {
    return {
      // dispatching plain actions
      login
    };
  }

//   Connect the 
  export default connect(mapStateToProps,mapDispatchToProps())(ContainedButtons);
