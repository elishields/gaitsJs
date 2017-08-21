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
            <GridData />
        )
    };
}

/*
 * GridData
 * Calls and handles data
 * Called By:   <Grid />
 * Returns:     <GridLayout />
 * Props In:    none
 * State:       gdp
 * Props Out:   gdp
 */
class GridData extends Component {

    constructor(props) {
        super(props);

        this.state = {
            usaData: 0,
            canData: 0
        };

        // Binds reference to "this" to member functions of GridData class
        this.callUsaData = this.callUsaData.bind(this);
        this.callCanData = this.callCanData.bind(this);
    };

    // Calls JSON data from Quandl API
    // Sets the data into <GridData /> state
    callUsaData = () => {

        // New object instance of XMLHttpRequest (XHR)
        let call = new XMLHttpRequest();
        // URL to access GDP data from Quandl's API
        let url = "https://www.quandl.com/api/v3/datasets/FRED/GDPCA.json?api_key=s5ww-6M37-ytgpAy2diW&collapse=annual&start_date=2015-01-01&end_date=2017-01-01";

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
                let data1 = dataArray.dataset.data[1][1];
                let data2 = dataArray.dataset.data[0][1];
                let data = (((data2 - data1) / data1) * 100 );
                data = data.toFixed(2);

                // Set datapoint arrays into state of <GridData />
                this.setState({
                    usaData: data
                });
                console.log("GridData state of gdp set as " + data);
            }
        };

        // Open XHR
        call.open("GET", url, true);
        // Send XHR
        call.send();
        console.log("XHR SENT");
    };

    // Calls JSON data from Quandl API
    // Sets the data into <GridData /> state
    callCanData = () => {

        // New object instance of XMLHttpRequest (XHR)
        let call = new XMLHttpRequest();
        // URL to access GDP data from Quandl's API
        let url = "https://www.quandl.com/api/v3/datasets/NBSC/A020106_A.json?api_key=s5ww-6M37-ytgpAy2diW&collapse=annual&start_date=2014-01-01&end_date=2017-01-01";

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
                let data1 = dataArray.dataset.data[1][1];
                let data2 = dataArray.dataset.data[0][1];
                let data = (((data2 - data1) / data1) * 100 );
                data = data.toFixed(2);

                // Set datapoint arrays into state of <GridData />
                this.setState({
                    canData: data
                });
                console.log("GridData state of gdp set as " + data);
            }
        };

        // Open XHR
        call.open("GET", url, true);
        // Send XHR
        call.send();
        console.log("XHR SENT");
    };

    componentDidMount() {
        this.callUsaData();
        this.callCanData();
        console.log("GridData mounted and callData ran");
    };

    render() {
        return (
            <GridLayout
                usaData={this.state.usaData}
                canData={this.state.canData}
            />
        )
    };
}

/*
 * GridLayout
 * Structures page elements as table
 * Called By:   <GridData />
 * Returns:     props received from <GridData />
 * Props In:    usaData, canData
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
                    <tbody>
                        <tr>
                            <td>USA GDP Y/Y&#916;</td>
                            <td>
                                {this.props.usaData}
                            </td>
                            <td>
                                &#37;
                            </td>
                        </tr>
                        <tr>
                            <td>CAN GDP Y/Y&#916;</td>
                            <td>
                                {this.props.canData}
                            </td>
                            <td>
                                &#37;
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    };
}

export default Grid;