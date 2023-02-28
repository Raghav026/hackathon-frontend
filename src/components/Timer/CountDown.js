import React, { useState, useEffect } from "react";

const CountDown = ({ timer }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTime = (timer) => {
    const time = Date.parse(timer) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(timer), 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex gap-2 text-white mt-6">
      <div>
        <span className="countdown font-mono">
          <span style={{ "--value": 15 }}>{days}</span>
        </span>
        days
      </div>
      <div>
        <span className="countdown font-mono">
          <span style={{ "--value": 10 }}>{hours}</span>
        </span>
        hours
      </div>
      <div>
        <span className="countdown font-mono">
          <span style={{ "--value": 24 }}>{minutes}</span>
        </span>
        min
      </div>
      <div>
        <span className="countdown font-mono">
          <span style={{ "--value": 50 }}>{seconds}</span>
        </span>
        sec
      </div>
    </div>
  );
};

export default CountDown;
