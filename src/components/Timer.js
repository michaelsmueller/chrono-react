import React, { Component } from 'react';
import Time from './Time';
import TimerButton from './TimerButton';

class Timer extends Component {
  state = {
    seconds: 0,
    intervalId: undefined,
  };

  timer = () => {
    this.setState(prevState => {
      return { seconds: prevState.seconds + 1 };
    })
  }

  start = () => {
    const { intervalId } = this.state;
    if (!intervalId) {
      this.setState({
        intervalId: setInterval(this.timer, 1000),
      })
    }
  }

  stop = () => {
    const { intervalId } = this.state;
    if (!!intervalId) {
      clearInterval(intervalId);
      this.setState({
        intervalId: undefined,
      })
    }
  }

  reset = () => {
    this.setState({
      seconds: 0,
    })
  }

  render() {
    const { seconds } = this.state;
    return (
      <div className='timer'>
        <Time seconds={seconds} />
        <TimerButton action={this.start}>Start</TimerButton>
        <TimerButton action={this.stop}>Stop</TimerButton>
        <TimerButton action={this.reset}>Reset</TimerButton>
      </div>
    )
  }
}

export default Timer;
