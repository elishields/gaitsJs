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
            dataValue1: 0,
            dataValue2: 0,
            dataValue3: 0,
            dataValue4: 0,
            dataValue5: 0
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
            // US GDP
            "https://www.quandl.com/api/v3/datasets/FRED/GDPCA.json?api_key=s5ww-6M37-ytgpAy2diW&collapse=annual&start_date=2015-01-01&end_date=2017-01-01",
            // CAN GDP
            "https://www.quandl.com/api/v3/datasets/OECD/NAAG_CAN_GDPVIXOB.json?api_key=s5ww-6M37-ytgpAy2diW&collapse=annual&start_date=2015-01-01&end_date=2017-12-31",
            // UK GDP
            "https://www.quandl.com/api/v3/datasets/UNAC/GDPU_GBR.json?api_key=s5ww-6M37-ytgpAy2diW&collapse=annual&start_date=2014-01-01",
            // JAP GDP
            "https://www.quandl.com/api/v3/datasets/UNAE/GDPCN_JPN.json?api_key=s5ww-6M37-ytgpAy2diW&collapse=annual&start_date=2014-01-01&end_date=2017-12-31",
            // CHN GDP
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
                // This access method (.dataset.data[][])
                //     is structured for JSON data from Quandl's API
                //     and will not scale.
                let dataPrevious = dataArray.dataset.data[1][1];
                let dataCurrent = dataArray.dataset.data[0][1];
                let dataValue = (((dataCurrent - dataPrevious) / dataPrevious) * 100 );
                dataValue = dataValue.toFixed(2);

                /*
                for (i = 0; i < url.length; i++) {
                    if (whichData === i) {
                        this.setState({
                // state probably can't be set with i as var for state
                // what is better way to do this?
                            i: dataValue
                        });
                    }
                }
                */

                // Set datapoint arrays into state of <GridData />
                // This is a gross chain of if's. Shorten
                if (whichData === 1) {
                    this.setState({
                        dataValue1: dataValue
                    });
                    console.log("GridData state of gdp set as " + dataValue);
                }
                if (whichData === 2) {
                    this.setState({
                        dataValue2: dataValue
                    });
                    console.log("GridData state of gdp set as " + dataValue);
                }
                if (whichData === 3) {
                    this.setState({
                        dataValue3: dataValue
                    });
                    console.log("GridData state of gdp set as " + dataValue);
                }
                if (whichData === 4) {
                    this.setState({
                        dataValue4: dataValue
                    });
                    console.log("GridData state of gdp set as " + dataValue);
                }
                if (whichData === 5) {
                    this.setState({
                        dataValue5: dataValue
                    });
                    console.log("GridData state of gdp set as " + dataValue);
                }

                /*
                // This switch block loads data much slower than the block of if's
                switch(whichData) {
                    case 1:
                        this.setState({
                            dataValue1: dataValue
                        });
                        break;
                    case 2:
                        this.setState({
                            dataValue2: dataValue
                        });
                        break;
                    case 3:
                        this.setState({
                            dataValue3: dataValue
                        });
                        break;
                    case 4:
                        this.setState({
                            dataValue4: dataValue
                        });
                        break;
                    case 5:
                        this.setState({
                            dataValue5: dataValue
                        });
                        break;
                    default:
                        break;
                }
                */
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
        console.log("GridData mounted and callData ran");
    };

    render() {
        return (
            <GridLayout
                dataValue1={this.state.dataValue1}
                dataValue2={this.state.dataValue2}
                dataValue3={this.state.dataValue3}
                dataValue4={this.state.dataValue4}
                dataValue5={this.state.dataValue5}
            />
        )
    };
}

export default GridData;