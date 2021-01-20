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

const useStyles = makeStyles((theme) => ({
    root: {
      //height: "40vh",
      [theme.breakpoints.down('sm')]: {
        height: "180px",
      },
      [theme.breakpoints.up('md')]: {
        height: "260px",
      },
      [theme.breakpoints.up('lg')]: {
        height: "300px",
      },
      backgroundSize: "cover",
    },
    headerTitle: {
      textAlign: "center",
      width: "100%",
      textTransform: "uppercase",
      [theme.breakpoints.down('sm')]: {
        fontSize: "18px"
      },
      [theme.breakpoints.up('md')]: {
        fontSize: "20px"
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: "24px"
      },
    },
    title: {
      color: "#FFFFFF",
      [theme.breakpoints.down('sm')]: {
        fontSize: "40px"
      },
      [theme.breakpoints.up('md')]: {
        fontSize: "60px"
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: "70px"
      },
    },
    subtitle: {
      color: "#FFFFFF",
      [theme.breakpoints.down('sm')]: {
        fontSize: "20px"
      },
      [theme.breakpoints.up('md')]: {
        fontSize: "25px"
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: "30px"
      },
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
              <Typography variant="h6" className={classes.headerTitle}>
                Inequality Dashboard
              </Typography>
            </Toolbar>
          </AppBar>
          <Toolbar />
          <Typography  variant="h1" className={classes.title}>
            Inequality Dashboard
          </Typography>
          <Typography variant="h4" className={classes.subtitle}>
            A graphical representation of Inequality in the world, using the latest numbers of the World Inequality Database
          </Typography>
      </div>
      );
}

export default Header;