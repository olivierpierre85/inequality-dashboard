import React, { Component } from "react";
import { render } from "react-dom";
import Header from './Header';
import backgroundImage from './img/inequality-golf.jpg'; 

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header image={backgroundImage}/>
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);