import React, {Component} from 'react';

let MovesCounter = ({ moves }) => {

    let movesClass = (moves === 0) ? 'hidden' : '';
    let movesLabel = '0';

    if (moves === 1) {
        movesLabel = '1 move';
    } else if (moves > 1) {
        movesLabel = `${moves} moves`;
    }

    //TODO: proptypes
    return (
        <div className="moves-counter">
            <span className={movesClass}>{movesLabel}</span>
        </div>
    );
}

export default MovesCounter;
