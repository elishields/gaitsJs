// Import classes from React
import React, { Component } from "react";

// Import components and objects
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

    // Stateless and functionless constructor for <Grid />
    constructor(props) {
        super(props);
        this.state = {
        };
    };

    render() {
        return (
            <GridLayout />
        )
    };
}

/*
 * GridLayout
 * Structures page elements
 * Called By:   <Grid />
 * Returns:     <GridData />
 * Props In:    none
 * State:       none
 * Props Out:   none
 */
class GridLayout extends Component {

    // Stateless and functionless constructor for <GridLayout />
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

/*
 * GridData
 * Calls and handles data
 * Called By:   <GridLayout />
 * Returns:     <GridDataPrint />
 * Props In:    none
 * State:       none
 * Props Out:   none
 */
class GridData extends Component {

    // Stateless and functionless constructor for <GridDataOptions />
    constructor(props) {
        super(props);
        this.state = {
            get: []
        };
    };

    // State and function constructor for <GridDataCall />
    constructor(props) {
        super(props);
        this.state = {
            goldPrice: 0
        };

        // Binds reference to this to member functions
        this.callData = this.callData.bind(this);
    };

    // Calls JSON data from Quandl API
    // Sets the data into <CallData /> state
    callData = () => {
        // New object instance of XMLHttpRequest (XHR)
        let call = new XMLHttpRequest();
        // Array of string URL's to access Quandl's API
        let url = "https://www.quandl.com/api/v3/datasets/FRED/GDP.json?api_key=s5ww-6M37-ytgpAy2diW&start_date=2016-01-01";

        // Fires the XHR when the loading state of the document changes
        // Parameterless fat-arrow function
        call.onreadystatechange = () => {
            // If (XHR is finished and response is ready) and (status is ok)
            if (call.readyState === 4 && call.status === 200) {
                // Parse the JSON responseText from the XHR
                let dataArray = JSON.parse(call.responseText);

                // Access the most recent datapoint in the dataArray
                // This method of access (.dataset.data[][]) is not scalable,
                // as it is written specifically for Quandl's data structure
                // DataKey is date and DataValue is quantity
                let goldPrice = dataArray.dataset.data[0][0];

                // Set datapoint arrays as state of <MapCallData />
                this.setState({
                    goldPrice: 1
                });
            }
        };

        // Open XHR
        call.open("GET", url, true);
        // Send XHR
        call.send();
    };

    render() {
        return (
            <div>
                <button onClick={this.callData}>
                    Call data!
                </button>
                <GridDataCall
                    get={this.state.get}
                />
            </div>
        )
    };

    render() {
        return (
            <GridDataProcess
                goldPrice={this.state.goldPrice}
            />
        )
    };
}

/*
 * GridDataPrint
 * Main page component.
 * Called By:   <GridData />
 * Returns:     target data
 * Props In:    none
 * State:       none
 * Props Out:   none
 */
class GridDataPrint extends Component {

    // Constructor for <GridDataDisplay />
    constructor(props) {
        super(props);
        this.state = {
            goldPrice: this.props.goldPrice
        };
    };

    render() {
        return (
            <div>
                <table id="grid-table">
                    <tr>
                        <td>Gold</td>
                        <td>{this.state.goldPrice}</td>
                    </tr>
                </table>
            </div>
        )
    };
}

export default Grid;