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
 * Structures page elements as table
 * Called By:   <Grid />
 * Returns:     <GridData />
 * Props In:    none
 * State:       none
 * Props Out:   none
 */
class GridLayout extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    };

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td>GDP</td>
                        <td>
                            <GridData />
                        </td>
                    </tr>
                </table>
            </div>
        )
    };
}

/*
 * GridData
 * Calls and handles data
 * Called By:   <GridLayout />
 * Returns:     <GridDataPrint />
 * Props In:    none
 * State:       gdp
 * Props Out:   gdp
 */
class GridData extends Component {

    constructor(props) {
        super(props);

        this.state = {
            gdp: 0
        };

        // Binds reference to "this" to member functions of GridData class
        this.callData = this.callData.bind(this);
    };

    // Calls JSON data from Quandl API
    // Sets the data into <GridData /> state
    callData = () => {

        // New object instance of XMLHttpRequest (XHR)
        let call = new XMLHttpRequest();
        // URL to access GDP data from Quandl's API
        let url = "https://www.quandl.com/api/v3/datasets/FRED/GDP.json?api_key=s5ww-6M37-ytgpAy2diW&start_date=2016-01-01";

        // Fires the XHR when the loading state of the page is ready
        // Parameterless fat-arrow function
        call.onreadystatechange = () => {
            // If (XHR is finished and response is ready) and (status is ok)
            if (call.readyState === 4 && call.status === 200) {
                // Parse the JSON responseText from the XHR
                let dataArray = JSON.parse(call.responseText);

                // Access the most recent datapoint in the dataArray
                //     (key at [0], value at [1])
                // This method of access (.dataset.data[][]) is not scalable,
                //     as it is written specifically for Quandl's data structure
                let gdp = dataArray.dataset.data[0][1];

                // Set datapoint arrays into state of <GridData />
                this.setState({
                    gdp: gdp
                });
                console.log("GridData state of gdp set as " + gdp);
            }
        };

        // Open XHR
        call.open("GET", url, true);
        // Send XHR
        call.send();
        console.log("XHR SENT");
    };

    componentDidMount() {
        this.callData();
        console.log("GridData mounted and callData ran");
    };

    render() {
        return (
            <GridDataPrint
                gdp={this.state.gdp}
            />
        )
    };
}

/*
 * GridDataPrint
 * Main page component.
 * Called By:   <GridData />
 * Returns:     props.gdp received from GridData
 * Props In:    gdp
 * State:       none
 * Props Out:   none
 */
class GridDataPrint extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    };

    render() {
        return (
            <div>
                {this.props.gdp}
            </div>
        )
    };
}

export default Grid;