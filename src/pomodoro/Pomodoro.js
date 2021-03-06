import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import FocusDurationChange from "../Focus/FocusDuration";
import BreakDurationChange from "../Break/BreakDuration";
import Progress from "../Progress/Progress";
import TimeLeft from "../TimeLeft/TimeLeft";
function Pomodoro() {
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  // Focus duration starts out as 1 minute
  const [focusDuration, setDuration] = useState(25);
  // Time remaining is initially null
  const [timeRemaining, setTimeRemaining] = useState(null);
  // toFocus starts off false
  const [toFocus, setToFocus] = useState(null);
  // Break duration starts out at 60 seconds
  const [breakDuration, setBreakDuration] = useState(300);
  // toBreak starts off false
  const [toBreak, setToBreak] = useState(false);
  // elapsedTime represents progress bar completion
  const [elapsedTime, setElapsedTime] = useState(0);
  // pause starts off as false
  const [pause, setPause] = useState(false);
  // stop starts off as false
  const [stop, setStop] = useState(false);
  // Assign timeRemaining to its own variable
    // On click increase break duration by one minute
    const handleClickBreakIncrease = () => {
      setBreakDuration((prevDuration) => {
        return (prevDuration += 60);
      });
    };
    // On click decrease break duration by one minute
    const handleClickBreakDecrease = () => {
      setBreakDuration((prevDuration) => {
        return (prevDuration -= 60);
      });
  };
  const handleFocusClickIncrease = ({ target }) => {
    setDuration((prevDuration) => {
      return (prevDuration += 5);
    });
  };
// Decrease duration by 5 with every click
  const handleFocusClickDecrease = ({ target }) => {
    setDuration((prevDuration) => {
      return (prevDuration -= 5);
    });
  };
  let currentTime = timeRemaining;
  let timeElapsed = elapsedTime;
 
  useInterval(
    () => {
      let timeElapsed = 1;
      // Time remaining is subtracted by 1 every second
      setTimeRemaining(() => {
        return currentTime - timeElapsed;
      });

      // If time remaining reaches 0, stop timer & play music
      // Wait 3 seconds and then pause the music, start Timer again,
      if (timeRemaining <= 0) {
        setIsTimerRunning(false);
        const music = new Audio(`${process.env.PUBLIC_URL}/alarm/alarm.wav`);
        music.play();
        setTimeout(function () {
          music.pause();
          //playPause();
          setIsTimerRunning((prevState) => !prevState);
          // Change state of Focus and Break to opposite (T/F)
          setToFocus((prevState) => !prevState);

          setToBreak((prevState) => !prevState);

         
          toFocus === true
            ? setTimeRemaining(breakDuration)
            : setTimeRemaining(focusDuration * 60);
        }, 3000);
      }
      if (toFocus === true) {
        setElapsedTime((prevState) => {
          return (prevState += 100 / (focusDuration * 60));
        });
      } else if (toBreak === true) {
        setElapsedTime((prevState) => {
          return (prevState += 100 / breakDuration);
        });
      }
      
     if (elapsedTime >= 100) {
       setElapsedTime((prevState) => {
            return (prevState = 0);
          });
     }
    },
    isTimerRunning ? 1000 : null
  );

  // This function is called whenever the play/pause button is clicked
  function playPause() {
    // Changes timer to opposite state (T/F)
    setIsTimerRunning((prevState) => !prevState);

    // If currentTime variable is null set it to focusDuration * 60 (first click)
    if (currentTime === null) {
      setTimeRemaining(focusDuration * 60);
    } else {
      // set Time remaining to whatever current time remaining is
      setTimeRemaining(currentTime);
    }

    // If when clicked toFocus or toBreak is true, keep the states as true
    if (toFocus === true) {
      setToFocus(true);
    } else if (toBreak === true) {
      setToBreak(true);
    } else if (toFocus === null) {
      setToFocus(true);
    }
    // If button is clicked and timer is running
    if (isTimerRunning) {
      // set pause to true
      setPause(true);
      // stop timer
      setIsTimerRunning(false);
      // set time remaining to current time
      setTimeRemaining(currentTime);
      setElapsedTime(timeElapsed)
    }
    if (pause === true) {
      setPause(false);
      if (toFocus === true) {
        setElapsedTime((prevState) => {
          return (prevState += 100 / (focusDuration * 60));
        });
      } else if (toBreak === true) {
        setElapsedTime((prevState) => {
          return (prevState += 100 / breakDuration);
        });
      }
    }
  }
  function stopTimer() {
    setPause(false);
    setStop(true);
    setTimeRemaining(null);
    setElapsedTime(0);
    setDuration(25);
    setBreakDuration(300);
    setIsTimerRunning(false);
  }

  return (
    <div className="pomodoro">
      <div className="row">
        <FocusDurationChange
          isTimerRunning={isTimerRunning}
          focusDuration={focusDuration}
          setDuration={setDuration}
          pause={pause}
          focusIncrease={handleFocusClickIncrease}
          focusDecrease={handleFocusClickDecrease}
        />
        <BreakDurationChange
          isTimerRunning={isTimerRunning}
          breakDuration={breakDuration}
          setBreakDuration={setBreakDuration}
          pause={pause}
          breakIncrease={handleClickBreakIncrease}
          breakDecrease={handleClickBreakDecrease}
        />
      </div>
      <div className="row">
        <div className="col">
          <TimeLeft
            isTimerRunning={isTimerRunning}
            toFocus={toFocus}
            playPause={playPause}
            focusDuration={focusDuration}
            breakDuration={breakDuration}
            timeRemaining={timeRemaining}
            setToFocus={setToFocus}
            toBreak={toBreak}
            setToBreak={setToBreak}
            elapsedTime={elapsedTime}
            stopTimer={stopTimer}
          />
          <Progress
            isTimerRunning={isTimerRunning}
            toFocus={toFocus}
            playPause={playPause}
            focusDuration={focusDuration}
            breakDuration={breakDuration}
            timeRemaining={timeRemaining}
            setToFocus={setToFocus}
            toBreak={toBreak}
            setToBreak={setToBreak}
            elapsedTime={elapsedTime}
            setElapsedTime={setElapsedTime}
            pause={pause}
            stop={stop}
          />
        </div>
      </div>
    </div>
  );
}

export default Pomodoro;