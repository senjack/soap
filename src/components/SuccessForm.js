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
import AuthButton1 from './AuthButton1';
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

export default function CustomizedDialogs() {
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
      
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      <div className="dialog-box">
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <h1>Success</h1>
        </DialogTitle>
        <DialogContent id="customized-dialog-content" dividers>
          <Typography gutterBottom>
            <h3>Congratulations!!</h3>
          </Typography>
                   
        </DialogContent>

        <DialogContent id="customized-dialog-bottom" dividers>
          
          <Typography gutterBottom>
            You have successfully created your account<br/>
            Now log into your account and fill the application form.
          </Typography>
          
        </DialogContent>
        <DialogActions id="customized-dialog-button">
        <AuthButton1 caption="Login" />
           
        </DialogActions>
        </div>
      </Dialog>
      
    </div>
    // </StylesProvider>
  );
}