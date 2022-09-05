import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  //
  useEffect(() => {
    console.log("running side effect");
    let id;

    // set the interval if the stopwatch is running
    if (isRunning) {
      id = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
        console.log("tick");
      }, 1000);
    }

    // cleanup function to clear the interval
    return () => {
      clearInterval(id);
      console.log("clean up");
    };
  }, [isRunning]);

  return (
    <div className="stopwatch">
      <h2>Stopwatch</h2>
      <span className="stopwatch-time">{elapsedTime}</span>
      <button onClick={() => setIsRunning((prevValue) => !prevValue)}>
        {isRunning ? "Stop" : "Start"}
      </button>
      <button onClick={() => setElapsedTime(0)}>Reset</button>
    </div>
  );
};
export default Stopwatch;
