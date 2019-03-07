import React, { Component } from "react";
import "./style.css";
import Landing from './Landing/Landing'
import tornado from '../Assets/TFC_Banner_without_dots.jpg'


class App extends Component {
  render() {
    return (
      <div className="App">
       <img src ={tornado} alt='tornados-fc-logo'/>
        <Landing />
      </div>
    )
  }
}

export default App;
