// Import classes from React
import React, { Component } from "react";

// Import components and objects
import { GridData } from "../Grid/GridData";
// import { APIarray } from "../APIarray";

// Import styling
import "../App.css";

/*
 * Grid
 * Main page component
 * Called By:   <App />
 * Returns:     <GridLayout />
 * Props In:    none
 * State:       none
 * Props Out:   none
*/
export class Grid extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    };

    render() {
        return (
            <GridData />
        )
    };
}

export default Grid;