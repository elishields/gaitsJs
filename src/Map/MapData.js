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

/*
    * MapCallData.
    * Renders <MapCallData />
    *   which calls data from Quandl's API,
    *   sets the data as state,
    *   passes the state as props into <MapSetData />
    *   and renders <MapSetData />
    * Called by <MapData />
*/
class MapCallData extends Component {

    constructor(props) {
        super(props);

        // State for current and previous datapoints
        // State as array type
        this.state = {
            dataSetCurrent: [],
            dataSetPrevious: []
        };

        // Binds reference to this to member functions
        this.callData = this.callData.bind(this);
    };

    // Calls JSON data from Quandl API
    // Sets the data into <MapCallData /> state
    callData = () => {
        // New object instance of XMLHttpRequest (XHR)
        let call = new XMLHttpRequest();
        // Array of string URL's to access Quandl's API
        let urlArray = [
            "https://www.quandl.com/api/v3/datasets/FRED/GDP.json?api_key=s5ww-6M37-ytgpAy2diW&start_date=2016-01-01",
            "https://www.quandl.com/api/v3/datasets/FRED/CPIUFDSL.json?api_key=s5ww-6M37-ytgpAy2diW&collapse=quarterly&start_date=2016-04-01",
            "https://www.quandl.com/api/v3/datasets/FRED/UNEMPLOY.json?api_key=s5ww-6M37-ytgpAy2diW&collapse=annual&start_date=2015-12-31"
        ];
        // Evaluates which data option the user has selected from the select menu
        let dataSelectMenuValue = document.getElementById("data-select-menu").value;
        // URL to call from urlArray, based on data option the user had selected
        let url = urlArray[dataSelectMenuValue];

        // Empty arrays for storing datapoints returned by XHR, local to callData()
        var cleanedDataSetCurrent = [];
        var cleanedDataSetPrevious = [];

        // Fires the XHR when the loading state of the document changes
        // Parameterless fat-arrow function
        call.onreadystatechange = () => {
            // If (XHR is finished and response is ready) and (status is ok)
            if (call.readyState === 4 && call.status === 200) {
                // Parse the JSON responseText from the XHR
                let dataArray = JSON.parse(call.responseText);

                // Access the most recent datapoint in the dataArray
                // This method of access (.dataset.data[][]) is not sustainable,
                // as it is written specifically for Quandl's data structure
                let cleanedDataKeyCurrent = dataArray.dataset.data[0][0];
                let cleanedDataValueCurrent = dataArray.dataset.data[0][1];
                // Store the current dataKey and dataValue into a single array
                cleanedDataSetCurrent = [cleanedDataKeyCurrent, cleanedDataValueCurrent];

                // Access the previous datapoint in the dataArray
                let cleanedDataKeyPrevious = dataArray.dataset.data[1][0];
                let cleanedDataValuePrevious = dataArray.dataset.data[1][1];
                // Store the previous dataKey and dataValue into a single array
                cleanedDataSetPrevious = [cleanedDataKeyPrevious, cleanedDataValuePrevious];

                // Set datapoint arrays as state of <MapCallData />
                this.setState({
                    dataSetCurrent: cleanedDataSetCurrent,
                    dataSetPrevious: cleanedDataSetPrevious
                });
            }
        };

        call.open("GET", url, true);
        call.send();
    };

    render() {
        return (
            <div>
                <br/>
                <select
                    onChange={this.callData}
                    id="data-select-menu"
                >
                    <option value="0">GDP</option>
                    <option value="1">CPI</option>
                    <option value="2">U6</option>
                </select>
                <MapWorkData
                    dataSetCurrent={this.state.dataSetCurrent}
                    dataSetPrevious={this.state.dataSetPrevious}
                />
            </div>
        )
    };
}

/*
    * MapWorkData.
    * Renders <MapWorkData />
    *   which modifies the data called in <MapCallData />
    *   and renders <MapSetData /> with this modified data
    *   passed in as props.
    * Called by <MapCallData /> with props passed.
*/
class MapWorkData extends Component {

    constructor(props) {
        super(props);

        // State for growth rate between current and previous datapoints
        this.state = {
            dataGrowth: 0.00,
            dataSetCurrent: this.props.dataSetCurrent,
            dataSetPrevious: this.props.dataSetPrevious
        };

        // Binds reference to this to member functions
        this.workData = this.workData.bind(this);
    };

    // Invoked immediately after the component is mounted
    componentDidMount() {
        // This function call has no parentheses as it appears that JS calls the function
        // as soon as it is read, even if componentDidMount is false
        // The order in which JS is called is not fully understood
        this.workData;
        console.log(this.state.dataGrowth);
    };

    // Invoked immediately after updating occurs
    // Updating occurs when updated props are received
    // Updated props are received when <MapCallData /> updates its state
    componentDidUpdate() {
        this.workData;
    };

    // Calculates growth rate between current and previous datapoints
    workData = () => {
        console.log(this.state.dataSetCurrent[1]);
        // (Y2-Y1)/Y1
        let dataGrowth = ((this.state.dataSetCurrent[1] - this.state.dataSetPrevious[1]) / this.state.dataSetPrevious[1]);
        // Represent with 2 decimal places
        dataGrowth = dataGrowth.toFixed(2);
        // Represent as percent
        dataGrowth = (dataGrowth * 100);
        console.log(dataGrowth);

        this.setState({
            dataGrowth: dataGrowth
        });
    };

    render() {
        return (
            <MapSetData
                dataGrowth={this.state.dataGrowth}
            />
        )
    };
}

/*
    * MapSetData.
    * Renders <MapSetData />
    *   which is a return of the props received from <MapWorkData />
    * Called by <MapWorkData /> with props passed.
 */
class MapSetData extends Component {

    constructor(props) {
        super(props);

        // State for current and previous datapoints
        this.state = {
            numToColour: this.props.dataGrowth
        };

        // Binds reference to this to member functions
        this.colourIt = this.colourIt.bind(this);
    };

    // Invoked immediately after the component is mounted
    componentDidMount() {
        this.colourIt;
    };

    // Invoked immediately after updating occurs
    componentDidUpdate() {
        this.colourIt;
    };

    // Colours the country-name by manipulating the DOM post-render
    colourIt = () => {
        let colour = "grey";

        // Colour determined by growth rate passed in as props from <MapWorkData />
        if (this.state.numToColour > 2.00) {
            colour = "green";
            console.log(this.state.numToColour);
        } else if (this.state.numToColour > 0.00) {
            colour = "yellow";
            console.log(this.state.numToColour);
        } else if (this.state.numToColour <= 0) {
            colour = "red";
            console.log(this.state.numToColour);
        } else {
            colour = "grey";
            console.log(this.state.numToColour);
        }

        // Manipulates DOm
        document.getElementById("usa").style.color = colour;
        console.log("colourit ran");
    };

    render() {
        return (
            <div>
                <p>USA</p>
                <br/>
                <p id="usa">Growth : {this.state.numToColour}</p>
            </div>
        )
    };
}

export default MapData;