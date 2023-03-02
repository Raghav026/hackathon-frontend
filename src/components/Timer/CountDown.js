import React, { useState, useEffect } from "react";
const CountDown = ({ timer }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const getTime = (timer) => {
    timer.setHours(16, 30);
    console.log(timer);
    const time = timer - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };
  useEffect(() => {
    const interval = setInterval(() => getTime(timer), 1000);
    return () => clearInterval(interval);
  }, [timer]);
  return (
    <>
    <h2 className="text-center text-white text-3xl mb-4">Match Starts In:</h2>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col p-2 bg-neutral text-white">
          <span className="font-mono text-5xl">
            <span style={{}}>{days}</span>
          </span>
          <span className="duration">Days</span>
        </div>
        <div className="flex flex-col p-2 bg-neutral text-white">
          <span className="font-mono text-5xl">
            <span style={{}}>{hours}</span>
          </span>
          <span>Hours</span>
        </div>
        <div className="flex flex-col p-2 bg-neutral text-white">
          <span className="font-mono text-5xl">
            <span style={{}}>{minutes}</span>
          </span>
          <span>Minutes</span>
        </div>
        <div className="flex flex-col p-2 bg-neutral text-white">
          <span className="font-mono text-5xl">
            <span style={{}}>{seconds}</span>
          </span>
          <span>Seconds</span>
        </div>
      </div>
    </>
  );
};
export default CountDown