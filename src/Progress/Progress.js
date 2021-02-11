import React, { useState } from "react";
import classNames from "../utils/class-names";
import useInterval from "../utils/useInterval";
import { secondsToDuration } from "../utils/duration";
import FocusDurationChange from "../Focus/FocusDuration";
import BreakDurationChange from "../Break/BreakDuration";

function Progress({ isTimerRunning,
    playPause,
    focusDuration,
    timeRemaining,
    toFocus,
    setToFocus,
    breakDuration,
    toBreak,
    setToBreak,
    elapsedTime,
    setElapsedTime
}) {
    let timeToAlter = (focusDuration * 60) / 10;
    useInterval(
      () => {
        setElapsedTime((prevTime) => {
          return prevTime + 10;
        });
      },
      isTimerRunning ? timeToAlter * 1000 : null
    );
    if (isTimerRunning) {
        return (
            <>
            <div className="row mb-2">
              <div className="col">
                {/* TODO: Update message below to include current session (Focusing or On Break) and total duration */}
                <h2 data-testid="session-title">
                  Focusing for {focusDuration} minutes
                </h2>
                {/* TODO: Update message below to include time remaining in the current session */}
                <p className="lead" data-testid="session-sub-title">
                  {secondsToDuration(timeRemaining)} remaining
                </p>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col">
                <div className="progress" style={{ height: "20px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow={elapsedTime} // TODO: Increase aria-valuenow as elapsed time increases
                    style={{ width: `${elapsedTime}%` }} // TODO: Increase width % as elapsed time increases
                  />
                </div>
              </div>
            </div>
          </> 
       )
   } return null
}
export default Progress;
