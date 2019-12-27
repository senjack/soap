import React from 'react';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  badge: {
    backgroundColor: "#fff",
    color: "#542a52",
    fontWeight: "bolder",
    fontSize:"15px",
    marginRight: "20px"
  }

}));

export default function BadgeAlignment(props) {
  const classes = useStyles();
  return (
      <Badge
        badgeContent={props.badgeContent}
        classes={{ badge: classes.badge }}>
      </Badge>
    
  );
}