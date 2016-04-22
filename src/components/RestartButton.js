import React, {Component} from 'react';

export default class RestartButton extends Component {

    //TODO: proptypes

    onNewGameClick(props) {
        props.resetTiles();
        props.countUpdate(0);
        props.timerUpdate(false, true);
    }

    render() {
        return (
            <button className="button-restart" onClick={this.onNewGameClick.bind(null, this.props)}>New Game</button>
        );
    }
}
