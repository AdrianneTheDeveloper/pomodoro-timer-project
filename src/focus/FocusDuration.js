import React from "react";
import { minutesToDuration } from "../utils/duration";

function FocusDurationChange({ isTimerRunning, focusDuration, focusDecrease, focusIncrease, pause }) {
 

  return (
    <div className="col">
      <div className="input-group input-group-lg mb-2">
        <span className="input-group-text" data-testid="duration-focus">
          {/* TODO: Update this text to display the current focus session duration */}
          Focus Duration: {minutesToDuration(focusDuration)}
        </span>
        <div className="input-group-append">
          {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
          {focusDuration <= 5 || isTimerRunning === true || pause === true ? (
            <button
              // If any of these conditions are met, disable this button
              disabled={true}
              onClick={focusDecrease}
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-focus"
            >
              <span className="oi oi-minus" />
            </button>
          ) : (
            <button
              disabled={false}
              onClick={focusDecrease}
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-focus"
            >
              <span className="oi oi-minus" />
            </button>
          )}

          {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
          {focusDuration >= 60 || isTimerRunning === true || pause === true ? (
            <button
              disabled={true}
              onClick={focusIncrease}
              type="button"
              className="btn btn-secondary"
              data-testid="increase-focus"
            >
              <span className="oi oi-plus" />
            </button>
          ) : (
            <button
              disabled={false}
              onClick={focusIncrease}
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
  );
}

export default FocusDurationChange;





