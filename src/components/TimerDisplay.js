import React, {Component} from 'react';

export default class TimerDisplay extends Component {

    // //TODO: proptypes

    format(time) {
        const pad = (time, length) => {
            while (time.length < length) {
                time = '0' + time;
            }
            return time;
        }

        time = new Date(time);
        let m = pad(time.getMinutes().toString(), 2);
        let s = pad(time.getSeconds().toString(), 2);

        return `${m}:${s}`;
    }

    render() {

        let className = 'timer';
        className += (! this.props.timer.enabled) ? ' hidden' : '';

        return (
            <span className={className}>
                {this.format(this.props.timer.time)} {this.props.timer.enabled}
            </span>
        );
    }
}
