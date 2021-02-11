import React, { useState } from "react";
import classNames from "../utils/class-names";
import useInterval from "../utils/useInterval";
import { secondsToDuration } from "../utils/duration";
import FocusDurationChange from "../Focus/FocusDuration";
import BreakDurationChange from "../Break/BreakDuration";
import Progress from "../Progress/Progress";

function TimeLeft({
  isTimerRunning,
  playPause,
  focusDuration,
  timeRemaining,
  toFocus,
  setToFocus,
  breakDuration,
  toBreak,
  setToBreak,
  elapsedTime,
  setElapsedTime,
}) {
  return (
    <>
      <div
        className="btn-group btn-group-lg mb-2"
        role="group"
        aria-label="Timer controls"
      >
        <button
          type="button"
          className="btn btn-primary"
          data-testid="play-pause"
          title="Start or pause timer"
          onClick={playPause}
        >
          <span
            className={classNames({
              oi: true,
              "oi-media-play": !isTimerRunning,
              "oi-media-pause": isTimerRunning,
            })}
          />
        </button>
        {/* TODO: Implement stopping the current focus or break session and disable when there is no active session */}
      </div>
      <div
        className="btn-group btn-group-lg mb-2"
        role="group"
        aria-label="Timer controls"
      >
      {isTimerRunning === false ? (
          <button
            disabled={true}
            type="button"
            className="btn btn-secondary"
            title="Stop the session"
          >
            <span className="oi oi-media-stop" />
          </button>
        ) : (
          <button
            disabled={false}
            type="button"
            className="btn btn-secondary"
            title="Stop the session"
          >
            <span className="oi oi-media-stop" />
          </button>
          )}
        </div>
    </>
  );
}

export default TimeLeft;
