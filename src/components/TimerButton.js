import React from 'react';

const TimerButton = (props) => {
  const { action, children } = props;
  return (
    <button onClick={action}>
      { children }
    </button>
  )
}

export default TimerButton;
