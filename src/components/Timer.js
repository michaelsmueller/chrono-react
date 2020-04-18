import React, { Component } from 'react';
import Time from './Time';
import TimerButton from './TimerButton';

class Timer extends Component {
  state = {
    seconds: 0,
    intervalId: undefined,
    onChange: undefined,
  };

  showTime = () => {
    console.log('showTime');
  }

  timer = () => {
    this.setState(prevState => {
      return {
        seconds: prevState.seconds + 1,
      };
    })
  }

  start = () => {
    console.log('start');
    const { seconds, intervalId, onChange } = this.state;
    if (!intervalId) {
      console.log('starting timer');
      this.setState({
        intervalId: setInterval(this.timer, 1000),
      })
    }
  }

  render() {
    const { seconds } = this.state;
    return (
      <div className='timer'>
        <Time seconds={seconds} />
        <TimerButton action={this.start}>Start</TimerButton>
        <TimerButton>Stop</TimerButton>
        <TimerButton>Reset</TimerButton>
      </div>
    )
  }
}

export default Timer;
