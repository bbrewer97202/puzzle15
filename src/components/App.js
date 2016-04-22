import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions.js';
import { connect } from 'react-redux';
import TileFrame from './TileFrame.js';
import MovesCounter from './MovesCounter.js';
import RestartButton from './RestartButton.js';
import TimerDisplay from './TimerDisplay.js';
import TimerButton from './TimerButton.js';

const mapStateToProps = (state) => {
  return {
    positions: state.positions,
    moves: state.moves,
    timer: state.timer
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

let Layout = (props) => {
    return (
        <div className="layout">
            <div className="panel panel-header">
                <MovesCounter moves={props.moves}/>
                <TimerDisplay timer={props.timer} timerUpdate={props.timerUpdate} />
            </div>
            <TileFrame props={props} />
            <div className="panel panel-footer">
                <RestartButton timerUpdate={props.timerUpdate} resetTiles={props.resetTiles} countUpdate={props.countUpdate} />
                <TimerButton timer={props.timer} timerEnable={props.timerEnable} timerUpdate={props.timerUpdate} />
            </div>
        </div>
    );
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)

export default App;
