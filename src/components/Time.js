import React from 'react';

const convertToStringWithTwoDigits = (number) => {
  return (number / 100).toFixed(2).split('.')[1];
}

const showTime = (seconds) => {
  const timerSeconds = convertToStringWithTwoDigits(seconds % 60); // remaining seconds 
  const timerMinutes = convertToStringWithTwoDigits(Math.floor(seconds / 60) % 60); // remaining minutes
  const timerHours = convertToStringWithTwoDigits(Math.floor(seconds / 60 / 60)); // number of hours
  return `${timerHours}:${timerMinutes}:${timerSeconds}`;
}

const Time = (props) => {
  const { seconds } = props;
  return (
    <div className='time'>
      {showTime(seconds)}
    </div>
  )
}

export default Time;
