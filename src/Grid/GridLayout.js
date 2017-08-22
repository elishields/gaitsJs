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
                        <tr>
                            <td>USA GDP Y/Y&#916;</td>
                            <td>
                                {this.props.usaData}
                            </td>
                            <td>
                                &#37;
                            </td>
                        </tr>
                        <tr>
                            <td>CHN GDP Y/Y&#916;</td>
                            <td>
                                {this.props.canData}
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