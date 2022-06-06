import React from "react";
import { useState, useEffect } from "react";

function Timer() {
  const [timeer, setTimeer] = useState(0);
  const [timerOn, setTimerOn] = useState(false); //at stt pt

  useEffect(() => {
    let interval = null; // took at inintial point timmmer...

    if (timerOn) {
      interval = setInterval(() => {
        setTimeer((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  
  return (
    <div>
     
      <div className="main">
        <div className="counts">
          <span>{("0" + Math.floor((timeer / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((timeer / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((timeer / 10) % 100)).slice(-2)}</span>
        </div>
        <br />
        <br />
        <div className="buttons">
          <button
            onClick={() => setTimerOn(true)}
            className="button-73"
          >
            Start
          </button>
          <button
            onClick={() => setTimerOn(false)}
            className="button-73"
          >
            Stop
          </button>

          <button onClick={() => setTimerOn(true)} className="button-73">
            Resume
          </button>
          <button onClick={() => setTimeer(0)} className="button-73">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
