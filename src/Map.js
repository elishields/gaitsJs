// Import classes from React
import React, { Component } from 'react';

// Import styling
import './App.css';

/* Determines which dataset to call. Calls that dataset. */
class MapData extends React.Component {

    constructor(props) {
        super(props);

        let rowsData = [];

        // Set state variables
        this.state = {
            rowsData: rowsData
        };

        // Bind reference to 'this' to member functions
        this.whichDataset = this.whichDataset.bind(this);
        this.dataCall = this.dataCall.bind(this);
    }

    whichDataset = function() {

        let datasets = [
            "gdp": "https://www.quandl.com/api/v3/datasets/FRED/GDPMCA1.json?start_date=1967-01-01&api_key=s5ww-6M37-ytgpAy2diW",
            "cpi": "https://www.quandl.com/api/v3/datasets/FRED/FPCPITOTLZGUSA.json?start_date=1967-01-01&api_key=s5ww-6M37-ytgpAy2diW"
        ]

        for (k in datasets) {
            if (k == data) {
                return datasets[k]
            }
        }

        return (
            {

            }
        )
    }

    dataCall = function(data) {
        return (
            {
                whichDataset()
            }
        )
    }

    /* Defines the HTML template for this class */
    render() {
        return (

        )
    }
}

export class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <h1>Economy</h1>
                <table>
                    <th>GDP</th>
                    <tr>
                        <td className="data-key-input"></td>
                        <td className="data-value-input"></td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Map;