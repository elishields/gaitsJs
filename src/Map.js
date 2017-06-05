// Import classes from React
import React, { Component } from "react";

// Import styling
import "./App.css";


/*
    * Map.
    * Renders the Map component
    * which is a return of the MapData component.
    * Called by App component.
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
    * Renders the MapData component
    * which is a return of the MapCallData and MapSetData
    * components.
    * Called by Map component.
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
    * Renders the MapCallData component
    * which is a return of the callData element
    * and the MapSetData component.
    * Called by MapData component.
    * Passes props to MapSetData.
    * No state.
*/
class MapCallData extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };

        // Binds reference to this to member functions
        // This binding is necessary to make `this` work in the callback
        this.callData = this.callData.bind(this);
    };

    // Initiates a data call to Quandl's API.
    callData = function() {
        let call = new XMLHttpRequest();
        let url = "https://www.quandl.com/api/v3/datasets/FRED/GDP.json?api_key=s5ww-6M37-ytgpAy2diW&start_date=2016-01-01";

        var cleanedDataSet = [];

        call.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                let dataArray = JSON.parse(this.responseText);
                let cleanedDataKey = dataArray.dataset.data[0][0];
                let cleanedDataValue = dataArray.dataset.data[0][1];
                cleanedDataSet = [cleanedDataKey, cleanedDataValue];
                console.log(cleanedDataSet);
            }
        };

        call.open("GET", url, true);
        call.send();
    };

    render() {
        return (
            <div>
                <input
                    type="submit"
                    value="get the data"
                    onClick={this.callData}
                />
                <MapSetData

                />
            </div>
        )
    };
}

/*
    * MapSetData.
    * Renders the MapSetData component
    * which is a return of the setData element.
    * Called by MapCallData component.
    * Receives props from MapCallData.
    * State is updated by the data returned by MapCallData.
 */
class MapSetData extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };

        // Binds reference to this to member functions
        // This binding is necessary to make `this` work in the callback
        this.setData = this.setData.bind(this);
    };

    setData(dataSet) {
        this.setState(prevState => ({
            dataKey: dataSet[0],
            dataValue: dataSet[1]
        }));
        console.log("Setdataran");
    };

    render() {
        return (
            <div>
                <p>Key:{this.state.dataKey}</p>
                <p>Value:{this.state.dataValue}</p>
            </div>
        )
    };
}

export default Map;