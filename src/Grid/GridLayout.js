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
                    <thead>GDP Y/Y &#916;</thead>
                    <tbody>
                        <tr>
                            <td>USA</td>
                            <td>
                                {this.props.CAN_GDP}
                            </td>
                            <td>
                                &#37;
                            </td>
                        </tr>
                        <tr>
                            <td>CAN</td>
                            <td>
                                {this.props.USA_GDP}
                            </td>
                            <td>
                                &#37;
                            </td>
                        </tr>
                        <tr>
                            <td>GBR</td>
                            <td>
                                {this.props.GBR_GDP}
                            </td>
                            <td>
                                &#37;
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <thead>CPI Y/Y &#916;</thead>
                    <tbody>
                    <tr>
                        <td>USA</td>
                        <td>
                            {this.props.CAN_CPI}
                        </td>
                        <td>
                            &#37;
                        </td>
                    </tr>
                    <tr>
                        <td>CAN</td>
                        <td>
                            {this.props.USA_CPI}
                        </td>
                        <td>
                            &#37;
                        </td>
                    </tr>
                    <tr>
                        <td>GBR</td>
                        <td>
                            {this.props.GBR_CPI}
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