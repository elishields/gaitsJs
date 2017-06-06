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
            dataSet1: [],
            dataSet2: []
        };

        // Binds reference to this to member functions
        //this.callData = this.callData.bind(this);
        this.callDataSelect = this.callDataSelect.bind(this);
    };

    callDataSelect = () => {
        let call = new XMLHttpRequest();
        let urlArray = [
            "https://www.quandl.com/api/v3/datasets/FRED/GDP.json?api_key=s5ww-6M37-ytgpAy2diW&start_date=2016-01-01",
            "https://www.quandl.com/api/v3/datasets/FRED/CPIUFDSL.json?api_key=s5ww-6M37-ytgpAy2diW&collapse=quarterly&start_date=2016-04-01",
            "https://www.quandl.com/api/v3/datasets/FRED/UNEMPLOY.json?api_key=s5ww-6M37-ytgpAy2diW&collapse=annual&start_date=2015-12-31"
        ];
        let dataSelectMenuValue = document.getElementById("data-select-menu").value;
        let url = urlArray[dataSelectMenuValue];

        var cleanedDataSet1 = [];
        var cleanedDataSet2 = [];

        call.onreadystatechange = () => {
            if (call.readyState === 4 && call.status === 200) {
                let dataArray = JSON.parse(call.responseText);

                let cleanedDataKey1 = dataArray.dataset.data[0][0];
                let cleanedDataValue1 = dataArray.dataset.data[0][1];
                cleanedDataSet1 = [cleanedDataKey1, cleanedDataValue1];

                let cleanedDataKey2 = dataArray.dataset.data[1][0];
                let cleanedDataValue2 = dataArray.dataset.data[1][1];
                cleanedDataSet2 = [cleanedDataKey2, cleanedDataValue2];

                this.setState({
                    dataSet1: cleanedDataSet1,
                    dataSet2: cleanedDataSet2
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
                    onChange={this.callDataSelect}
                    id="data-select-menu"
                >
                    <option value="0">GDP</option>
                    <option value="1">CPI</option>
                    <option value="2">U6</option>
                </select>
                <MapWorkData
                    dataSet1={this.state.dataSet1}
                    dataSet2={this.state.dataSet2}
                />
            </div>
        )
    };
}

/*
    * MapWorkData.
    * Called by <MapCallData /> with props passed.
    * Renders <MapWorkData />
    *   which modifies the data called in <MapCallData />
    *   and renders <MapSetData /> with this modified data
    *   passed in as props.
*/
class MapWorkData extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dataGrowth1: 0,
            dataGrowth2: 0
        };

        this.workData = this.workData.bind(this);
    };

    workData = () => {
        let dataGrowth1 = ((this.props.dataSet1 - this.props.dataSet2) * 100);
        dataGrowth1 = dataGrowth1.toFixed(2);

        this.setState({
            dataGrowth1: dataGrowth1
        });
    };

    render() {
        return (
            <MapSetData
                dataGrowth={this.state.dataGrowth1}
                dataGrowth2={this.state.dataGrowth2}
            />
        )
    };
}

/*
    * MapSetData.
    * Renders <MapSetData />
    *   which is a return of the props received from <MapCallData />
    * Called by <MapWorkData /> with props passed.
 */
class MapSetData extends Component {

    constructor(props) {
        super(props);

        this.state = {
            numToColour: this.props.dataGrowth
        };

        this.colourIt = this.colourIt.bind(this);
    };

    componentDidMount() {
        this.colourIt();
    };

    componentDidUpdate() {
        this.colourIt();
    };

    colourIt = () => {
        let colour = "grey";

        if (this.props.dataGrowth > 2) {
            colour = "green";
            console.log(colour);
        } else if (this.props.dataGrowth > 0) {
            colour = "yellow";
            console.log(colour);
        } else {
            colour = "red";
            console.log(colour);
        }

        document.getElementById("usa").style.color = colour
    };

    render() {
        return (
            <div>
                <table className="table">
                    <tr className="table">
                        <th className="table">Country</th>
                        <th className="table">&#37;&#916;</th>
                    </tr>
                    <tr className="table">
                        <td className="table" id="usa">'Mericuh!</td>
                        <td className="table">{this.props.dataGrowth}</td>
                    </tr>
                    <tr className="table">
                        <td className="table" id="usa">Ms. Watanabe</td>
                        <td className="table">{this.props.dataGrowth}</td>
                    </tr>
                </table>

                {/*<p>Key1 : {this.props.dataKey1}</p>
                <p>Value1 : {this.props.dataValue1}</p>
                <br/>
                <p>Key2 : {this.props.dataKey2}</p>
                <p>Value2 : {this.props.dataValue2}</p>
                <br/>
                <p>Growth : {this.props.dataGrowth}</p>*/}

            </div>
        )
    };
}

export default Map;