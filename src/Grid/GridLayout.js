// Import classes from React
import React, { Component } from "react";

// Import components and objects
// import { APIarray } from "../APIarray";

// Import styling
import "../App.css";

/*
 * GridLayout
 * Structures page elements as table
 * Called By:   <GridData />
 * Returns:     props received from <GridData />
 * Props In:    usaData, canData
 * State:       none
 * Props Out:   none
 */
export class GridLayout extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    };

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <thead>GDP Y/Y &#916;</thead>
                        <tr>
                            <td>USA</td>
                            <td>
                                {this.props.dataValue1}
                            </td>
                            <td>
                                &#37;
                            </td>
                        </tr>
                        <tr>
                            <td>CAN</td>
                            <td>
                                {this.props.dataValue2}
                            </td>
                            <td>
                                &#37;
                            </td>
                        </tr>
                        <tr>
                            <td>UK</td>
                            <td>
                                {this.props.dataValue3}
                            </td>
                            <td>
                                &#37;
                            </td>
                        </tr>
                        <tr>
                            <td>JAP</td>
                            <td>
                                {this.props.dataValue4}
                            </td>
                            <td>
                                &#37;
                            </td>
                        </tr>
                        <tr>
                            <td>CHN</td>
                            <td>
                                {this.props.dataValue5}
                            </td>
                            <td>
                                &#37;
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    };
}

export default GridLayout;