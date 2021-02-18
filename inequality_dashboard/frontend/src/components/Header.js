import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundSize: "cover",
      backgroundPosition: "50%",
      [theme.breakpoints.up('md')]: {
        minHeight: 500,
      },
    },
    barTitle: {
      textAlign: "center",
      width: "100%",
      textTransform: "uppercase",
    },
    headerText: {
      textAlign: "left",
      backgroundColor:"#0000007a",
      [theme.breakpoints.up('md')]: {
        minHeight: 500,
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
      paddingTop : "1rem",
      paddingBottom : "6rem",
      paddingLeft : "1rem",
      paddingRight : "1rem",
      textTransform: "capitalize",
    },
    menuButton: {
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

  return (
      <div className={classes.root}
      style={{ 
        backgroundImage: "url(" + image + ")",
      }}
        >
          <AppBar position="fixed">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <MenuIcon />
              </IconButton>
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
              <Typography variant="button" className={classes.barTitle}>
                Inequality Dashboard
              </Typography>
            </Toolbar>
          </AppBar>
          <Toolbar />
          <Paper square elevation={0} className={classes.headerText}>
            <Typography  variant="h1" className={classes.title}>
              We show you Inequality with Numbers
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              A graphical representation of Inequality in the world, using the latest numbers of the World Inequality Database
            </Typography>
          </Paper>
      </div>
      );
}

export default Header;