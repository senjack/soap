import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

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
            <Button id="auth-btn2" variant="contained" color="primary" className={classes.button}  onClick={(e) => { e.preventDefault(); props.action === "reset" ? props.reset() : props.action === "toggle" ? props.toggle() : console.error('error occured'); }}>
                {props.caption}
      </Button>
        </div>
    );
}

const mapStateToProps = (appState) => {
    console.log(appState)
    return { appState: appState };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      reset: () => { dispatch({ type: 'reset' }) },
      toggle: () => { dispatch({ type: 'toggle' }) }
    }
  }
  
  //   Connect redux with react
export default connect(mapStateToProps, mapDispatchToProps)(ContainedButtons);
