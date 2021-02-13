import React from "react";
import { secondsToDuration, minutesToDuration } from "../utils/duration";


function Progress({
  isTimerRunning,
  focusDuration,
  timeRemaining,
  toFocus,
  breakDuration,
  toBreak,
  elapsedTime,
  pause,
  stop,
}) {

  if (toFocus === true && isTimerRunning) {
    return (
      <>
        <div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) and total duration */}
            <h2 data-testid="session-title">
              Focusing for {minutesToDuration(focusDuration)} minutes
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
    );
  } else if (toBreak === true && isTimerRunning) {
    return (
      <>
        <div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) and total duration */}
            <h2 data-testid="session-title">
              On Break for {secondsToDuration(breakDuration)} minutes
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
    );
  } else if (pause === true && !isTimerRunning) {
    return (
      <>
        <div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) and total duration */}
            <h2 data-testid="session-title">
              {toFocus === true
                ? `Focusing for ${minutesToDuration(focusDuration)} minutes`
                : `On Break for ${secondsToDuration(breakDuration)} minutes`}
            </h2>
            {/* TODO: Update message below to include time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(timeRemaining)} remaining
            </p>
            <h3>PAUSED</h3>
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
    );
  } else if (stop === true) {
    return null;
  }
  return null;
}
export default Progress;
