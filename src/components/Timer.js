import React, { Component } from 'react';
import Time from './Time';
import TimerButton from './TimerButton';

class Timer extends Component {
  state = {
    numberOfSeconds: 0,
    intervalId: undefined,
    onChange: undefined,
  };

  render() {
    return (
      <div class='timer'>
        <Time />
        <TimerButton>Start</TimerButton>
        <TimerButton>Stop</TimerButton>
        <TimerButton>Reset</TimerButton>
      </div>
    )
  }
}

export default Timer;
