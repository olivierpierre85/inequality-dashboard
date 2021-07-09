import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import { Paper, Link, Toolbar,Typography, IconButton, Button, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundSize: "cover",
      backgroundPosition: "50%",
      [theme.breakpoints.up('md')]: {
        minHeight: 300,
      },
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      paddingRight: "60px",
      paddingLeft: "60px",
    },
    barTitle: {
      textAlign: "center",
      width: "100px",
      textTransform: "uppercase",
    },
    barLogo: {
      textAlign: "left",
      textTransform: "uppercase",
      color: "white",
    },
    menuButton: {
      paddingLeft: "20px",
      paddingRight: "20px",
    },
    drawerContainer: {
      padding: "20px 30px",
      textAlign : "center",
    },
    drawerItem: {
      justifyContent : "center",
    },
    headerText: {
      textAlign: "left",
      paddingBottom : "4rem",
      backgroundColor:"#00000000",
      // [theme.breakpoints.up('md')]: {
      //   minHeight: 300,
      // },
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
  }));

const Header = (props) => {
  const classes = useStyles();
  const { image } = props;

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const inequalityLogo = (
    <Typography className={classes.barLogo} >
      <Link color="inherit" underline="none" component={RouterLink} to="/" >
      Inequality Dashboard
      </Link>
    </Typography>
  );

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar className={classes.toolbar}>
        { inequalityLogo }
        <IconButton edge="start"  color="inherit" aria-label="menu" aria-controls="simple-menu" aria-haspopup="true" onClick={handleDrawerOpen}>
          <MenuIcon />
        </IconButton>
        <Drawer className={classes.drawerContainer}
          {...{
            anchor: "top",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <Link
            {...{
              component: RouterLink,
              to: "/",
              color: "inherit",
              key: "Home",
              onClick:handleDrawerClose
            }}
          >
            <MenuItem className={classes.drawerItem}>Home</MenuItem>
          </Link>
          <Link
            {...{
              component: RouterLink,
              to: "/demo",
              color: "inherit",
              key: "Demo",
              onClick:handleDrawerClose
            }}
          >
            <MenuItem className={classes.drawerItem}>Demo</MenuItem>
          </Link>
        </Drawer>
      </Toolbar>
    )
  }

  const displayDesktop = () => {
    return (
      <Toolbar className={classes.toolbar}>
        { inequalityLogo }
        <div>
        <Button
          {...{
              key: "Home",
              color: "inherit",
              to: "/",
              component: RouterLink,
              className: classes.menuButton
          }}
        >Home</Button>
        <Button
          {...{
              key: "Demo",
              color: "inherit",
              to: "/demo",
              component: RouterLink,
              className: classes.menuButton
          }}
        >Demo</Button>
        <Button
          {...{
              key: "Tour",
              color: "inherit",
              to: "/tour",
              component: RouterLink,
              className: classes.menuButton,
              whiteSpace: 'nowrap',
          }}
        >Inequality Quick Tour</Button>
        </div>
    </Toolbar>
    );
  };

  return (
      <div className={classes.root}
      style={{ 
        backgroundImage: "url(" + image + ")",
      }}
        >
          <AppBar position="fixed">
          {mobileView ? displayMobile() : displayDesktop()}
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