import React from 'react';
import CountUp from 'react-countup';
 const Counter = (props) => {
return (
  <CountUp
    className="custom-count"
    start={props.start}
    end={props.end}
    duration={3}
    useEasing={false}
   suffix={props.suffix}
   prefix={props.prefix}
   separator="."
  />
);
};
export default Counter;