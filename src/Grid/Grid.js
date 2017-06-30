
/*
 * MapData.
 * Called by <Map />
 * Renders <MapData />
 *   which is a return of <MapCallData />
 * No props received.
 * No state.
 * No props passed.
 */
export class Grid extends Component {

    // Stateless and functionless constructor for <MapData />
    constructor(props) {
        super(props);
        this.state = {
        };
    };

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>Asset</th>
                        <td>1wk</td>
                        <td>QTD</td>
                        <td>YTD</td>
                        <th>Economy</th>
                        <td>Q/Q</td>
                        <td>Y/Y</td>
                        <td>10yr Avg</td>
                        <th>Rate</th>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        )
    };
}