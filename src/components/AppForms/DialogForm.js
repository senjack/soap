import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import AuthButton1 from '../AppButtons/AuthButton1';
// import {StylesProvider} from '@material-ui/styles'
import SignUpSuccessForm from './SignUpSuccessForm';

const styles = theme => ({
  // root: {
  //   margin: 0,
  //   padding: theme.spacing(2),
  // },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (

    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function DialogForm(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    // <StylesProvider injectFirst>
    <div>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        Open dialog
      </Button>
      
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} >
      <div className="dialog-box">
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <h4>{props.title}</h4>
        </DialogTitle>
        <DialogContent id="customized-dialog-content" class={(props.status === "success")?"success-bg":(props.status === "failure")?"failure-bg":null} dividers>
          <Typography gutterBottom>
            <h6>{props.subTitle}</h6>
          </Typography>                   
        </DialogContent>

        <DialogContent id="customized-dialog-bottom" dividers>
          
          <Typography gutterBottom >
          {props.children}
          </Typography>
          
        </DialogContent>
        <DialogActions id="customized-dialog-button">
        {/* <AuthButton1 caption="Login Now" /> */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12"></div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <button className="btn btn-primary" id="app-dialog-button1">Login</button>            
            </div>
          </div>
        </div>
           
        </DialogActions>
        </div>
      </Dialog>
      
    </div>
    // </StylesProvider>
  );
}