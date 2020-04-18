import React from 'react';

const TimerButton = (props) => {
  const { children } = props;
  return (
    <button>
      { children }
    </button>
  )
}

export default TimerButton;
