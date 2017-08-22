// Import classes from React
import React, { Component } from "react";

// Import components and objects
import { GridLayout } from "../Grid/GridLayout";
// import { APIarray } from "../APIarray";

// Import styling
import "../App.css";

/*
 * GridData
 * Calls and handles data
 * Called By:   <Grid />
 * Returns:     <GridLayout />
 * Props In:    none
 * State:       gdp
 * Props Out:   gdp
 */
export class GridData extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dataValue1: 0,
            dataValue2: 0
        };

        // Binds reference to "this" to member functions of GridData class
        this.callUsaData = this.callUsaData.bind(this);
    };

    // Calls JSON data from Quandl API
    // Sets the data into <GridData /> state
    callUsaData = (whichData) => {

        // New object instance of XMLHttpRequest (XHR)
        let call = new XMLHttpRequest();
        // URL to access GDP data from Quandl's API
        let url = [
            "https://www.quandl.com/api/v3/datasets/FRED/GDPCA.json?api_key=s5ww-6M37-ytgpAy2diW&collapse=annual&start_date=2015-01-01&end_date=2017-01-01",
            "https://www.quandl.com/api/v3/datasets/NBSC/A020106_A.json?api_key=s5ww-6M37-ytgpAy2diW&collapse=annual&start_date=2014-01-01&end_date=2017-01-01"
        ];

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
                let dataPrevious = dataArray.dataset.data[1][1];
                let dataCurrent = dataArray.dataset.data[0][1];
                let dataValue = (((dataCurrent - dataPrevious) / dataPrevious) * 100 );
                dataValue = dataValue.toFixed(2);

                // Set datapoint arrays into state of <GridData />
                if (whichData === 0) {
                    this.setState({
                        dataValue1: dataValue
                    });
                    console.log("GridData state of gdp set as " + dataValue);
                }
                if (whichData === 1) {
                    this.setState({
                        dataValue2: dataValue
                    });
                    console.log("GridData state of gdp set as " + dataValue);
                }
            }
        };

        // Open XHR
        call.open("GET", url[whichData], true);
        // Send XHR
        call.send();
        console.log("XHR SENT");
    };

    componentDidMount() {
        this.callUsaData(0);
        this.callUsaData(1);
        console.log("GridData mounted and callData ran");
    };

    render() {
        return (
            <GridLayout
                usaData={this.state.dataValue1}
                canData={this.state.dataValue2}
            />
        )
    };
}

export default GridData;