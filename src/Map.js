// Import classes from React
import React, { Component } from "react";

// Import components and objects
import {APIarray} from "./APIarray";

// Import styling
import "./App.css";


/*
    * Map.
    * Renders <Map />
    *   which is a return of <MapData />
    * Called by <App />
    * No props.
    * No state.
*/
export class Map extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    };

    render() {
        return (
            <MapData />
        );
    };
}


/*
    * MapData.
    * Renders <MapData />
    *   which is a return of <MapCallData />
    * Called by <Map />
    * No props.
    * No state.
*/
class MapData extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    };

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
        this.state = {
            dataKey: 0,
            dataValue: 0
        };

        // Binds reference to this to member functions
        //this.callData = this.callData.bind(this);
        this.callDataSelect = this.callDataSelect.bind(this);
    };

/*
    // Calls data from Quandl's API
    callData = () => {
        let call = new XMLHttpRequest();
        let url = "https://www.quandl.com/api/v3/datasets/FRED/GDP.json?api_key=s5ww-6M37-ytgpAy2diW&start_date=2016-01-01";

        var cleanedDataSet = [];

        call.onreadystatechange = () => {
            if (call.readyState === 4 && call.status === 200) {
                let dataArray = JSON.parse(call.responseText);
                let cleanedDataKey = dataArray.dataset.data[0][0];
                let cleanedDataValue = dataArray.dataset.data[0][1];
                cleanedDataSet = [cleanedDataKey, cleanedDataValue];
                this.setState({
                    dataKey: cleanedDataSet[0],
                    dataValue: cleanedDataSet[1]
                });
            }
        };

        call.open("GET", url, true);
        call.send();
    };
*/

    callDataSelect = () => {
        let call = new XMLHttpRequest();
        let urlArray = [
            "https://www.quandl.com/api/v3/datasets/FRED/GDP.json?api_key=s5ww-6M37-ytgpAy2diW&start_date=2016-01-01",
            "https://www.quandl.com/api/v3/datasets/FRED/CPIUFDSL.json?api_key=s5ww-6M37-ytgpAy2diW&collapse=quarterly&start_date=2016-04-01",
            "https://www.quandl.com/api/v3/datasets/FRED/UNEMPLOY.json?api_key=s5ww-6M37-ytgpAy2diW&collapse=annual&start_date=2015-12-31"
        ];
        let dataSelectMenuValue = document.getElementById("data-select-menu").value;
        let url = urlArray[dataSelectMenuValue];

        var cleanedDataSet = [];

        call.onreadystatechange = () => {
            if (call.readyState === 4 && call.status === 200) {
                let dataArray = JSON.parse(call.responseText);
                let cleanedDataKey = dataArray.dataset.data[0][0];
                let cleanedDataValue = dataArray.dataset.data[0][1];
                cleanedDataSet = [cleanedDataKey, cleanedDataValue];
                this.setState({
                    dataKey: cleanedDataSet[0],
                    dataValue: cleanedDataSet[1]
                });
            }
        };

        call.open("GET", url, true);
        call.send();
    };

    render() {
        return (
            <div>
                {/*
                <input
                    type="submit"
                    value="get the data"
                    onClick={this.callData}
                />
                */}
                <select
                    onChange={this.callDataSelect}
                    id="data-select-menu"
                >
                    <option value="0">GDP</option>
                    <option value="1">CPI</option>
                    <option value="2">U6</option>
                </select>
                <MapSetData
                    dataKey={this.state.dataKey}
                    dataValue={this.state.dataValue}
                />
            </div>
        )
    };
}

/*
    * MapSetData.
    * Renders the <MapSetData />
    *   which is a return of the props received from <MapCallData />
    * Called by <MapCallData />
    * Receives props from MapCallData.
 */
class MapSetData extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    };

    render() {
        return (
            <div>
                <p>Key:{this.props.dataKey}</p>
                <p>Value:{this.props.dataValue}</p>
            </div>
        )
    };
}

export default Map;