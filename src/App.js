// Import classes from React
import React, { Component } from "react";
// import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

// Import component classes
import { Map } from "./Map/Map.js";

// Import styling
import "./App.css";

// Entry point for app. Loaded in index.js
class App extends Component {
    render() {
        return (
            <div id="global">
                <Map />
            </div>
        );
    }
}

export default App;