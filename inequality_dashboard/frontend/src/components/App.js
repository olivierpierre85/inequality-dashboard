import React, { Component } from "react";
import { render } from "react-dom";
import Header from './Header';
import Content from './Content';
import backgroundImage from './img/inequality-golf.jpg'; 
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2e7d32',
    },
    secondary: {
      main: '#d84315',
    },
  },
  typography: {
    // Tell Material-UI what's the font-size on the html element is.
    //htmlFontSize: 20,
  },
});

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <ThemeProvider theme={theme}>
        <Header image={backgroundImage}/>
        <Content/>
    </ThemeProvider>
      
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);