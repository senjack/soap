import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {StylesProvider} from '@material-ui/styles'
import Avatar from '@material-ui/core/Avatar';

/* START : imports from AppNavBar */
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import MoreIcon from '@material-ui/icons/MoreVert';
import AppDrawerButton from '../AppButtons/AppDrawerButton';
/* END : imports from AppNavBar */

// const drawerWidth = 240;
const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    minHeight:"100vh",
    backgroundColor:"#f9f9f9",
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      /* width: `calc(100% - ${drawerWidth}px)`, */
      width: "100%",
      marginLeft: drawerWidth,
    },
     zIndex: theme.zIndex.drawer + 1
},
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
},
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

/* START : Imported from AppNavBar */
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
sectionDesktop: {
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
},
sectionMobile: {
  display: 'flex',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
},
/* END : Imported from AppNavBar */
fillUp:{width:"100%",height:"100%"},
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


/* START : Imported from AppNavBar */
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}><span><PersonIcon /></span> <span style={{marginLeft:"10px"}}>Profile</span></MenuItem>
      <MenuItem onClick={handleMenuClose}><span><LockIcon /></span> <span style={{marginLeft:"10px"}}>Logout</span></MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
      <span> <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
         <AccountCircle /> 
        </IconButton>
        </span>
        <span><h5>Account</h5></span>
      </MenuItem>
    </Menu>
  );
/* END : Imported from AppNavBar */

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <div className="col-sm-12" style={{paddingTop:"15px",textAlign:"center"}}>
          {/* <button className="btn btn-large btn-danger" style={{width:"100%"}}>Placeholder</button> */}
          <center>
            <div style={{height:"150px",width:"150px",borderRadius:"150px",border:"6px solid rgb(228,108,10)",backgroundColor:"#f9f9f9"}}>
              <Avatar className={classes.fillUp} alt="User rofile" src={"/static/senjack.png"}/>
            </div>
          </center>
        </div>
        <div className="col-sm-12" style={{paddingTop:"10px",textAlign:"center",textShadow: "1px 1px #000",textTransform:"capitalize",}}>
          <center>
            <div>
              <h5>{"John Doe"}</h5>
            </div>
          </center>
        </div>
        <div className="col-sm-12" style={{paddingTop:"5px",textAlign:"center",textShadow: "1px 1px #000",textTransform:"lowerCase",}}>
          <center>
            <div>
              <h5>{"samplemail@domain.tld"}</h5>
            </div>
          </center>
        </div>
        <div className="col-sm-12" style={{paddingTop:"5px",textAlign:"center",textShadow: "1px 1px #000",textTransform:"upperCase",}}>
          <center>
            <div>
              <h5>{"REF/APL/CH-0004A/20/CT-0001A"}</h5>
            </div>
          </center>
        </div>
        <div className="col-sm-12">
          <hr  style={{borderColor:"#fff"}}/>
      </div>
      </List>
      {/* <Divider/> */}
      <List>
        <div className="col-sm-12" style={{paddingTop:"0px",marginTop:"-10px",}}>
          {/* <button className="btn btn-large btn-primary" style={{width:"100%"}}>Placeholder</button> */}
          <AppDrawerButton caption="Application Forms" action={(e)=>{console.log("Loading Application form.........");alert("Loading Application form.........");}}/>
          <AppDrawerButton caption="Preview Completed forms" action={(e)=>{console.log("Previewing Completed Application form(s)");alert("Previewing Completed Application form(s)");}}/>
          <AppDrawerButton caption="Feedback" action={(e)=>{console.log("Getting Feedback");alert("Getting Feedback");}}/>
          <AppDrawerButton caption="Help" action={(e)=>{console.log("Loading System documentation .........");alert("Loading System documentation .........");}}/>
        </div>
      </List>
    </div>
  );

  return (
    <StylesProvider injectFirst>
      <div className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
                <div style={{border:"2px solid #fff",width:"45px",borderRadius:"45px"}}>
                  <Avatar alt="Remy Sharp" src="/static/refactory1.jpg"/>
                </div>
          </Typography>
          <Typography variant="h6" noWrap>
                <span style={{paddingLeft:"20px",textShadow: "2px 2px #000"}}> Refactory : Student Online Admission Portal</span>
          </Typography>

{/* START : imported fron AppNavBar */}
          
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>            
          </div>
{/* END : imported fron AppNavBar */}

        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          <div className="row">
            <div className="col-sm-12">
              <div>
                <button className="btn btn-large btn-danger" style={{width:"100%"}}>Placeholder</button>
                <div style={{marginTop:"50px",paddingTop:"30px",borderTop:"1px solid #ddd",textAlign:"center",color:"#bbb",textShadow: "1px 1px #fff"}}>
                  <p>Refactory SOAP | Designed and Maintained by Refactory-Tech Academy</p>
                  <p>All Rights Reserved | @Refactory.ug</p>                  
                </div>
              </div>                          
            </div>            
          </div>
        </Typography>
      </main>
    </div>
    </StylesProvider>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default ResponsiveDrawer;