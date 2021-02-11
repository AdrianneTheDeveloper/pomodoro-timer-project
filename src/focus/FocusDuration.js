import React from 'react';
import classNames from "../utils/class-names";
import useInterval from "../utils/useInterval";
import { minutesToDuration } from "../utils/duration";

function FocusDurationChange({isTimerRunning, focusDuration, setDuration}) {
    // Increase duration by 5 mins for every click
    const handleClickIncrease = ({ target }) => {
      setDuration((prevDuration) => {
        return (prevDuration += 5);
      });
    };
  
    const handleClickDecrease = ({ target }) => {
      setDuration((prevDuration) => {
        return (prevDuration -= 5);
      });
    };
  return (
    <div className="col">
         <div className="input-group input-group-lg mb-2">
      <span className="input-group-text" data-testid="duration-focus">
        {/* TODO: Update this text to display the current focus session duration */}
        Focus Duration: {minutesToDuration(focusDuration)}
      </span>
      <div className="input-group-append">
        {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
        {focusDuration <= 5 || isTimerRunning === true ? (
          <button
            disabled={true}
            onClick={handleClickDecrease}
            type="button"
            className="btn btn-secondary"
            data-testid="decrease-focus"
          >
            <span className="oi oi-minus" />
          </button>
        ) : (
          <button
            disabled={false}
            onClick={handleClickDecrease}
            type="button"
            className="btn btn-secondary"
            data-testid="decrease-focus"
          >
            <span className="oi oi-minus" />
          </button>
        )}

        {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
        {focusDuration >= 60 || isTimerRunning === true ? (
          <button
            disabled={true}
            onClick={handleClickIncrease}
            type="button"
            className="btn btn-secondary"
            data-testid="increase-focus"
          >
            <span className="oi oi-plus" />
          </button>
        ) : (
          <button
            disabled={false}
            onClick={handleClickIncrease}
            type="button"
            className="btn btn-secondary"
            data-testid="increase-focus"
          >
            <span className="oi oi-plus" />
          </button>
        )}
      </div>
    </div>
    </div>
 
 
    )
  }

  export default FocusDurationChange






