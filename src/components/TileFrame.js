import React, {Component} from 'react';
import Tile from './Tile';

let TileFrame = (params) => {

    //TODO: proptypes
    let props = params.props;

    //iterate through list of lists, identifying even/odd
    let tileList = props.positions.map((row, rowIndex) => {
        return row.map((col, colIndex) => {
            let odd = ((props.positions[rowIndex][colIndex] % 2) === 0) ? false : true;
            return (
                <Tile id={col} key={col} row={rowIndex} col={colIndex} odd={odd} positions={props.positions} onSelect={props.selectTile} countUpdate={props.countUpdate} timer={props.timer} timerUpdate={props.timerUpdate} />
            );
        });
    });

    return (
        <div className="tile-frame">
            {tileList}
        </div>
    );
}

export default TileFrame;
