// Import classes from React
import React, { Component } from 'react';

// Import styling
import './App.css';

/* Determines which dataset to call. Calls that dataset. */
class MapData extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dataKey: "test",
            dataValue: "test"
        };
    }
/*
    dataCall = function() {
        let dataset = "https://www.quandl.com/api/v3/datasets/FRED/GDP.json?api_key=s5ww-6M37-ytgpAy2diW&start_date=2016-01-01";

        fetch(dataset)
            .then((resp) => resp.json())
            .then(function() {
                // Your code for handling the data you get from the API
            })
            .catch(function() {
                // This is where you run code if the server returns any errors
            });
    }
*/

    render() {
        return (
            <div>
                <p>a {this.state.dataKey}</p>
                <p>b {this.state.dataValue}</p>
            </div>
        )
    }
}

export class Map extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <MapData />
        );
    }
}

export default Map;