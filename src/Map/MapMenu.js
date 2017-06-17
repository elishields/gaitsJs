// Import classes from React
import React, { Component } from "react";

// Import components and objects
import {APIarray} from "../APIarray";

// Import styling
import "../App.css";

/*
    * MapData.
    * Renders <MapData />
    *   which is a return of <MapCallData />
    * Called by <Map />
    * No props.
    * No state.
*/
class MapData extends Component {

    // Stateless and functionless constructor for <MapData />
    constructor(props) {
        super(props);
        this.state = {
        };
    };

    // Renders <MapCallData />
    render() {
        return (
            <div>
                <MapCallData />
            </div>
        )
    };
}

export default MapMenu;