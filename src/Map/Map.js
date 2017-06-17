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
    * Renders <Map />
    *   which is a return of
    *   <MapData /> and <MapMenu />
    * Called by <App />
    * No props.
    * No state.
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
            <div className="row">
                <div className="col-xs-12 col-md-8">
                    <MapData />
                    <MapMenu />
                </div>
            </div>
        )
    };
}

export default Map;