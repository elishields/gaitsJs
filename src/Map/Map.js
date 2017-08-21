// Import classes from React
import React, { Component } from "react";

// Import components and objects
import { MapData } from "./MapData";
import { MapMenu } from "./MapMenu";
// import { APIarray } from "../APIarray";

// Import styling
import "../App.css";

/*
    * Map.
    * Called By: <App />
    * Returns: <MapData /> and <MapMenu />
    * Props In: none
    * State: none
    * Props Out: none
*/
export class Map extends Component {

    // Stateless and functionless constructor for <Map />
    constructor(props) {
        super(props);
        this.state = {
        };
    };

    // Renders <MapData />
    render() {
        return (
            <div>
                <MapData />
                <MapMenu />
            </div>
        )
    };
}

export default Map;