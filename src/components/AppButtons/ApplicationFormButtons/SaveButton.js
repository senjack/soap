import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';


const useStyles = makeStyles(theme => ({
  button: {
    width:"100%",
    textTransform:"capitalize",
    fontSize:"100%",
    borderRadius:"2px",
    backgroundColor:"#542a52"
  },
}));

export default function SaveButton() {
  const classes = useStyles();

  return (
    <div>
      <Button
        id="app-save-button"
        variant="contained"
        color="primary"
        // size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
        type="submit"
        /* disabled */
      >
        <SaveIcon/> <span style={{marginLeft:"10px"}}>Save</span>
      </Button>
    </div>
  );
}