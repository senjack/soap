import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import {reset,toggle} from '../appRedux/actions/AuthActions';


const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        textTransform:"none"
    },
    input: {
        display: 'none',
    },
}));


function ContainedButtons(props) {
    const classes = useStyles();

    return (
        <div>
            {/* <Button id="auth-btn2" variant="contained" color="primary" className={classes.button}  onClick={(e) => { e.preventDefault(); props.btnRole === "reset" ? props.reset() : props.btnRole === "toggle" ? props.toggle() : console.error('error occured'); }}>
                {props.caption}
      </Button> */}
            <Button id="auth-btn2" variant="contained" color="primary" className={classes.button}  onClick={(e) => { e.preventDefault(); props.btnRole === "reset" ? props.reset() : props.btnRole === "toggle" ? props.toggle(props.action) : console.error('error occured'); }}>
                {props.caption}
      </Button>
        </div>
    );
}

const mapStateToProps = (appState) => {
    // console.log(appState)
    return { appState: appState };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      reset,
      toggle
    }
  }
  
  //   Connect redux with react
export default connect(mapStateToProps, mapDispatchToProps())(ContainedButtons);
