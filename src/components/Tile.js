import React, {Component} from 'react';
import { getTilePosition } from '../util.js';

export default class Tile extends Component {

    //TODO: proptypes

    onSelect(props) {

        let selected = getTilePosition(props.positions, props.id);
        let empty = getTilePosition(props.positions, 0);
        let changedList = [];

        //to the left or right
        if (selected.row === empty.row) {

            //re-order the row
            let reorderedRow = props.positions[empty.row].slice();
            reorderedRow.splice(empty.col, 1);
            reorderedRow.splice(selected.col, 0, 0);

            //format updated changes
            changedList = reorderedRow.map((value, index) => {
                return {
                    row: empty.row,
                    col: index,
                    value
                }
            });

        //above or below
        } else if (selected.col === empty.col) {

            if (empty.row > selected.row) {
                while (empty.row > selected.row) {
                    empty.row--;
                    changedList.push({
                        row: empty.row + 1,
                        col: empty.col,
                        value: props.positions[empty.row][empty.col]
                    });
                }
            } else if (selected.row > empty.row) {
                while (selected.row > empty.row) {
                    empty.row++;
                    changedList.push({
                        row: empty.row - 1,
                        col: empty.col,
                        value: props.positions[empty.row][empty.col]
                    });
                }
            }
            changedList.push({
                row: selected.row,
                col: empty.col,
                value: 0
            });
        }

        //call action creator if change
        if (changedList.length) {

            //update the tile positions view
            props.onSelect(changedList);

            //update the move count
            props.countUpdate();

            //start the timer on tile move if not already running
            if (props.timer.enabled && (!props.timer.active)) {
                props.timerUpdate(true);
            }
        }
    }

    render() {

        //add even or odd styles, empty style
        let classNames = 'tile';
        classNames += (this.props.id === 0) ? ' empty' : '';
        classNames += (this.props.odd) ? ' odd' : ' even';

        return (
            <button className={classNames} disabled={(this.props.id === 0)} onClick={this.onSelect.bind(null, this.props)}>
                <span className="tile-copy">{this.props.id}</span>
            </button>
        );
    }
}
