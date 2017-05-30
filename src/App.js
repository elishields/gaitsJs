import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" id="global">
          <div id="powerup">
              <p>Economy</p>
              <p>GDP</p>
          </div>
      </div>
    );
  }
}

export default App;
