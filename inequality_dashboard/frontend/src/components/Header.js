import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundSize: "cover",
      backgroundPosition: "50%",
      [theme.breakpoints.up('md')]: {
        minHeight: 300,
      },
    },
    barTitle: {
      textAlign: "center",
      width: "100px",
      textTransform: "uppercase",
    },
    barLogo: {
      textAlign: "left",
      //width: "100%",
      textTransform: "uppercase",
    },
    headerText: {
      textAlign: "left",
      paddingBottom : "4rem",
      backgroundColor:"#00000000",
      [theme.breakpoints.up('md')]: {
        minHeight: 300,
      },
    },
    title: {
      color: "#FFFFFF",
      paddingTop : "1rem",
      paddingBottom : "1rem",
      paddingLeft : "1rem",
      paddingRight : "1rem",
      fontWeight: 400,
    },
    subtitle: {
      color: "#FFFFFF",
      padding : "0.5rem",
      textTransform: "capitalize",
      maxWidth: "600px",
      background: "black",
      marginTop : "1rem",
      marginBottom : "1rem",
      marginLeft : "1rem",
      marginRight : "1rem",
    },
    menuButton: {
      width : "100%" ,
    }
  }));

const Header = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const classes = useStyles();
  const { image } = props;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const inequalityLogo = (
    <Button
    {...{
        key: "home",
        color: "inherit",
        to: "/",
        component: Link,
        className: classes.barLogo
    }}
  >Inequality Dashboard</Button>
  );

  return (
      <div className={classes.root}
      style={{ 
        backgroundImage: "url(" + image + ")",
      }}
        >
          <AppBar position="fixed">
            <Toolbar>
              {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <MenuIcon />
              </IconButton> */}
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
              { inequalityLogo }
              <Button
                {...{
                    key: "Demo",
                    color: "inherit",
                    to: "/demo",
                    component: Link,
                    className: classes.menuButton
                }}
              >Demo</Button>
              <Button
                {...{
                    key: "test",
                    color: "inherit",
                    to: "/test",
                    component: Link,
                    className: classes.menuButton
                }}
              >Inequality Animation</Button>
            </Toolbar>
          </AppBar>
          <Toolbar />
          <Paper square elevation={0} className={classes.headerText}>
            <Typography  variant="h1" className={classes.title}>
              <span>We show you Inequality with Numbers</span>
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              <span>A graphical representation of Inequality in the world, using the latest numbers of the World Inequality Database</span>
            </Typography>
          </Paper>
      </div>
      );
}

export default Header;