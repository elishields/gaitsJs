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
                <br/>
                <table>
                    <thead>
                        <tr>
                            <th>
                                GDP Y/Y &#916;
                            </th>
                        </tr>
                    </thead>
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
                <br/><hr/><br/>
                <table>
                    <thead>
                        <tr>
                            <th>
                                CPI Y/Y &#916;
                            </th>
                        </tr>
                    </thead>
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
                <br/><hr/><br/>
                <table>
                    <thead>
                        <tr>
                            <th>
                                EQT Y/Y &#916;
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>USA</td>
                        <td>
                            {this.props.CAN_EQT}
                        </td>
                        <td>
                            &#37;
                        </td>
                    </tr>
                    <tr>
                        <td>CAN</td>
                        <td>
                            {this.props.USA_EQT}
                        </td>
                        <td>
                            &#37;
                        </td>
                    </tr>
                    <tr>
                        <td>GBR</td>
                        <td>
                            {this.props.GBR_EQT}
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