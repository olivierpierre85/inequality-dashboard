import React, { Component } from "react";
import { render } from "react-dom";
import Header from './Header';
import Content from './Content';
import backgroundImage from './img/inequality-golf.jpg'; 
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles'
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#d84315',
      
    },
    secondary: {
      main: '#2e7d32',
    },
  },
  typography: {
    h1 : {
      fontSize: 60,
    }
    // Tell Material-UI what's the font-size on the html element is.
    //htmlFontSize: 20,
  },
});

theme = responsiveFontSizes(theme);



export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
          <Router history={history}>
            
            <Header image={backgroundImage}/>

            <Content/>

          </Router>
      </ThemeProvider>      
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);