import React from "react";
import { secondsToDuration } from "../utils/duration";

function BreakDurationChange({isTimerRunning, breakDuration, setBreakDuration, pause}) {
  // Break duration starts out at 1:00
  
  // On click increase break duration by one minute
  const handleClickBreakIncrease = ({ target }) => {
    setBreakDuration((prevDuration) => {
      return (prevDuration += 60);
    });
  };
  // On click decrease break duration by one minute
  const handleClickBreakDecrease = ({ target }) => {
    setBreakDuration((prevDuration) => {
      return (prevDuration -= 60);
    });
  };
  return (
    <div className="col">
      <div className="float-right">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-break">
            {/* TODO: Update this text to display the current break session duration */}
            Break Duration: {secondsToDuration(breakDuration)}
          </span>
          <div className="input-group-append">
            {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
            {breakDuration <= 60 || isTimerRunning === true || pause === true ? (
              <button
                disabled={true}
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-break"
                onClick={handleClickBreakDecrease}
              >
                <span className="oi oi-minus" />
              </button>
            ) : (
              <button
                disabled={false}
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-break"
                onClick={handleClickBreakDecrease}
              >
                <span className="oi oi-minus" />
              </button>
            )}
            {breakDuration >= 900 || isTimerRunning === true || pause === true ? (
              <button
                disabled={true}
                type="button"
                className="btn btn-secondary"
                data-testid="increase-break"
                onClick={handleClickBreakIncrease}
              >
                <span className="oi oi-plus" />
              </button>
            ) : (
              <button
                disabled={false}
                type="button"
                className="btn btn-secondary"
                data-testid="increase-break"
                onClick={handleClickBreakIncrease}
              >
                <span className="oi oi-plus" />
              </button>
            )}

            {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreakDurationChange;