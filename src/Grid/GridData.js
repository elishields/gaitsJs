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
 * State:       dataValue1, dataValue2
 * Props Out:   dataValue1, dataValue2
 */
export class GridData extends Component {

    constructor(props) {
        super(props);

        this.state = {
            CAN_GDP: 0,
            USA_GDP: 0,
            GBR_GDP: 0,
            CAN_CPI: 0,
            USA_CPI: 0,
            GBR_CPI: 0,
            CAN_EQT: 0,
            USA_EQT: 0,
            GBR_EQT: 0
        };

        // Binds reference to "this" to member functions of GridData class
        this.callData = this.callData.bind(this);
    };

    // Calls JSON data from Quandl API
    // Sets the data into <GridData /> state
    callData = (whichData) => {

        // New object instance of XMLHttpRequest (XHR)
        let call = new XMLHttpRequest();
        // URL to access GDP data from Quandl's API
        let url = [
            "",
            // CAN_GDP
            "https://www.quandl.com/api/v3/datasets/OECD/NAAG_CAN_GDPVIXOB.json?api_key=s5ww-6M37-ytgpAy2diW&collapse=annual&start_date=2015-01-01&end_date=2017-12-31",
            // USA_GDP
            "https://www.quandl.com/api/v3/datasets/FRED/GDPCA.json?api_key=s5ww-6M37-ytgpAy2diW&collapse=annual&start_date=2015-01-01&end_date=2017-01-01",
            // GBR_GDP
            "https://www.quandl.com/api/v3/datasets/UNAC/GDPU_GBR.json?api_key=s5ww-6M37-ytgpAy2diW&collapse=annual&start_date=2014-01-01",
            // CAN_CPI
            "https://www.quandl.com/api/v3/datasets/RATEINF/CPI_CAN.json?api_key=s5ww-6M37-ytgpAy2diW&collapse=annual&start_date=2014-01-01",
            // USA_CPI
            "https://www.quandl.com/api/v3/datasets/RATEINF/CPI_USA.json?api_key=s5ww-6M37-ytgpAy2diW&collapse=annual&start_date=2014-01-01",
            // GBR_CPI
            "https://www.quandl.com/api/v3/datasets/RATEINF/CPI_GBR.json?api_key=s5ww-6M37-ytgpAy2diW&collapse=annual&start_date=2014-01-01"
            // CAN_EQT
            // USA_EQT
            // GBR_EQT
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
                // This access method (.dataset.data[][])
                //     is structured for JSON data from Quandl's API
                //     and will not scale.
                let dataPrevious = dataArray.dataset.data[1][1];
                let dataCurrent = dataArray.dataset.data[0][1];
                let dataValue = (((dataCurrent - dataPrevious) / dataPrevious) * 100 );
                dataValue = dataValue.toFixed(2);

                // Set datapoint arrays into state of <GridData />
                // This is a gross chain of if's. Shorten
                if (whichData === 1) {
                    this.setState({
                        CAN_GDP: dataValue
                    });
                    console.log("GridData state of gdp set as " + dataValue);
                }
                if (whichData === 2) {
                    this.setState({
                        USA_GDP: dataValue
                    });
                    console.log("GridData state of gdp set as " + dataValue);
                }
                if (whichData === 3) {
                    this.setState({
                        GBR_GDP: dataValue
                    });
                    console.log("GridData state of gdp set as " + dataValue);
                }
                if (whichData === 4) {
                    this.setState({
                        CAN_CPI: dataValue
                    });
                    console.log("GridData state of gdp set as " + dataValue);
                }
                if (whichData === 5) {
                    this.setState({
                        USA_CPI: dataValue
                    });
                    console.log("GridData state of gdp set as " + dataValue);
                }
                if (whichData === 6) {
                    this.setState({
                        GBR_CPI: dataValue
                    });
                    console.log("GridData state of gdp set as " + dataValue);
                }
                if (whichData === 4) {
                    this.setState({
                        CAN_EQT: dataValue
                    });
                    console.log("GridData state of gdp set as " + dataValue);
                }
                if (whichData === 5) {
                    this.setState({
                        USA_EQT: dataValue
                    });
                    console.log("GridData state of gdp set as " + dataValue);
                }
                if (whichData === 6) {
                    this.setState({
                        GBR_EQT: dataValue
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
        this.callData(1);
        this.callData(2);
        this.callData(3);
        this.callData(4);
        this.callData(5);
        this.callData(6);
        this.callData(7);
        this.callData(8);
        this.callData(9);
        console.log("GridData mounted and callData ran");
    };

    render() {
        return (
            <GridLayout
                CAN_GDP={this.state.CAN_GDP}
                USA_GDP={this.state.USA_GDP}
                GBR_GDP={this.state.GBR_GDP}
                CAN_CPI={this.state.CAN_CPI}
                USA_CPI={this.state.USA_CPI}
                GBR_CPI={this.state.GBR_CPI}
                CAN_EQT={this.state.CAN_EQT}
                USA_EQT={this.state.USA_EQT}
                GBR_EQT={this.state.GBR_EQT}
            />
        )
    };
}

export default GridData;