import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    testStyle: {
      fontStyle: "oblique",
    }
  });

const Header = (props) => {
    const classes = useStyles();
    const { image } = props;
    return (
        <div
        className=""
        style={{ 
          backgroundImage: "url(" + image + ")",
        }}
         >
            <h1>HEader é</h1>
        </div>
        );
}

export default Header;