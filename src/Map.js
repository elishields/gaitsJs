// Import classes from React
import React, { Component } from 'react';

// Import styling
import './App.css';

/*
 * Renders the Map component,
 * which is a return of the MapData component.
 * Called by App component.
 * Receives no props.
 * Passes no props.
 * Stateless component.
 */
export class Map extends Component {

    // Functionless and stateless constructor.
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
* Renders the MapData component,
* which is a return of a data call to Quandl's API.
*/
class MapData extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dataKey: "test",
            dataValue: "test"
        };

        // Binds reference to this to member functions
        this.getData = this.getData.bind(this);
        this.gotData = this.gotData.bind(this);
    };

    getData = function() {
        let call = new XMLHttpRequest();
        console.log("call");
        let url = "https://www.quandl.com/api/v3/datasets/FRED/GDP.json?api_key=s5ww-6M37-ytgpAy2diW&start_date=2016-01-01";

        let cleanedDataKey = "";
        let cleanedDataValue = "";

            call.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                let dataArray = JSON.parse(this.responseText);
                cleanedDataKey = dataArray.dataset.data[0][0];
                cleanedDataValue = dataArray.dataset.data[0][1];
                console.log(cleanedDataKey);
            }
        };

        call.open("GET", url, true);
        call.send();

        this.gotData(cleanedDataKey, cleanedDataValue);
    };

    gotData = function(dataKey, dataValue) {
        this.setState({
            dataKey: dataKey,
            dataValue: dataValue
        });
    };

    render() {
        return (
            <div>
                <input
                    type="submit"
                    value="get data"
                    onClick={this.getData}
                />
                <p>{this.state.dataKey}</p>
                <p>{this.state.dataValue}</p>
            </div>
        )
    };
}

export default Map;