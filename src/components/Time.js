import React from 'react';

const convertToStringWithTwoDigits = (number) => {
  return (number / 100).toFixed(2).split('.')[1];
}

const showTime = (seconds) => {
  const showSeconds = convertToStringWithTwoDigits(seconds % 60); // remaining seconds 
  const showMinutes = convertToStringWithTwoDigits(Math.floor(seconds / 60) % 60); // remaining minutes
  const showHours = convertToStringWithTwoDigits(Math.floor(seconds / 60 / 60)); // number of hours
  return `${showHours}:${showMinutes}:${showSeconds}`;
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
