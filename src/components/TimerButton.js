import React, {Component} from 'react';

export default class TimerButton extends Component {

    // //TODO: proptypes

    componentWillReceiveProps(newProps) {
        if (newProps.timer.active && newProps.timer.enabled && (! this.interval)) {
            this.start();
        }

        if ((!newProps.timer.active) && newProps.timer.enabled && this.interval) {
            this.stop();
        }
    }

    enable() {
        this.props.timerUpdate(false, true);
        this.props.timerEnable(true);
    }

    disable() {
        this.props.timerEnable(false);
        this.props.timerUpdate(false);
    }

    start() {
        this.props.timerUpdate(true);
        this.interval = setInterval(this.intervalTimer.bind(this), 1000);
    }

    stop() {
        this.props.timerUpdate(false);
        delete this.interval;
    }

    intervalTimer() {
        if (this.props.timer.active && (typeof(this.interval) !== 'undefined')) {
            this.props.timerUpdate();
        } else {
            clearInterval(this.interval);
        }
    }
    //<button className="button-timer" onClick={this.props.timer.active ? this.stop.bind(this) : this.start.bind(this)}>{this.props.timer.active ? 'Stop' : 'Start' }</button>
    render() {
        return (
            <div className="timer-controls">
                <span>Timer</span>
                <input className="toggle-button" id="useTimer" type="checkbox" onChange={this.props.timer.enabled ? this.disable.bind(this) : this.enable.bind(this)}/>
                <label className="toggle-button-label" htmlFor="useTimer"></label>
            </div>
        );
    }
}
