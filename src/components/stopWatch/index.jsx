import "./stopWatch.css";
import { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let timer = null;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}:${String(milliseconds).padStart(2, "0")}`;
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  const handleLap = () => {
    if (isRunning) {
      setLaps([...laps, time]);
    }
  };

  return (
    <div className="timeCont">
      <div className="time timeTxt">{formatTime(time)}</div>
      <div className="layout">
        <div>
          <button
            className="btn btntxt"
            onClick={handleStart}
            disabled={isRunning}
          >
            Start
          </button>
          <button
            className="btn btntxt"
            onClick={handlePause}
            disabled={!isRunning}
          >
            Pause
          </button>
        </div>
        <div>
          <button className="btn btntxt" onClick={handleReset}>
            Reset
          </button>
          <button
            className="btn btntxt"
            onClick={handleLap}
            disabled={!isRunning}
          >
            Lap
          </button>
        </div>
      </div>
      <div className="lap">
        {laps.length > 0 && (
          <div>
            <h3>Laps</h3>
            <ul>
              {laps.map((lap, index) => (
                <li key={index}>{formatTime(lap)}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stopwatch;
