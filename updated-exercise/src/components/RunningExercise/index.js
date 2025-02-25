import React, { useState, useEffect } from "react";

const RunningExercise = () => {
  const [laps, setLaps] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setCurrentTime(Date.now() - startTime);
      }, 100);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, startTime]);

  const handleStart = () => {
    setStartTime(Date.now());
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setLaps([]);
    setStartTime(null);
    setIsRunning(false);
    setCurrentTime(0);
  };

  const handleLap = () => {
    if (startTime && isRunning) {
      const lapTime = Date.now() - startTime;
      setLaps([...laps, lapTime]);
      setStartTime(Date.now());
    }
  };

  return (
    <div className="running-exercise">
      <div className="timer">
        {new Date(currentTime).toISOString().slice(11, 19)}
      </div>
      <div className="buttons">
        <button onClick={handleStart} disabled={isRunning}>
          Start
        </button>
        <button onClick={handleStop} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleLap} disabled={!isRunning}>
          Record Lap
        </button>
      </div>
      <ul className="laps">
        {laps.map((lap, index) => (
          <li key={index}>
            Lap {index + 1}: {new Date(lap).toISOString().slice(11, 19)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RunningExercise;
