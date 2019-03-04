import React, { Component } from "react";
import "./style.css";
import Landing from './Landing/Landing'



class App extends Component {
  render() {
    return (
      <div className="App">
        Welcome to Tornados FC!
        <Landing />
      </div>
    )
  }
}

export default App;
