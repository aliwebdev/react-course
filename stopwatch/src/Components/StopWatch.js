import React, { Component } from 'react';
import './StopWatch.css';

export default class StopWatch extends Component {
  state = {
    isRunning: false,
    mm: 0,
    ss: 0,
    ms: 0
  };

  timerID = 0;

  clickHandler = () => {
    let {isRunning} = this.state;
    if (isRunning) {
      // Running => Stop
      clearInterval(this.timerID);
    } else {
      // Stop => Running
      let {mm, ss, ms} = this.state;

      this.timerID = setInterval(() => {
        ms++;
        if (ms >= 100) {
          ss++;
          ms = 0;
        }
        if (ss >= 60) {
          mm++;
          ss = 0;
        }
        this.setState({ mm, ss, ms });
      }, 10);
    }
    this.setState({ isRunning: !isRunning });
  }

  // 1 => 01
  format(num) {
    return (num + '').length === 1 ? '0' + num : num + '';
  }

  render() {
    return (
      <div className="stop-watch">
        <div>        
          <span>{this.format(this.state.mm)}</span>:
          <span>{this.format(this.state.ss)}</span>:
          <span>{this.format(this.state.ms)}</span>
        </div>
        <button className="control" 
          onClick={this.clickHandler}>
          {this.state.isRunning ? 'Stop' : 'Start'}
        </button>
      </div>
    );
  }
}
