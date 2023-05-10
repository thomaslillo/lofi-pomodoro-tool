import React, { useState } from 'react';

const PomodoroTimer = () => {
// the times
  const [studyTime, setStudyTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  // for app behaviour
  const [timeLeft, setTimeLeft] = useState(studyTime * 60);
  const [isBreak, setIsBreak] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const intervalId = useRef(null);

  const handleStudyTimeChange = (e) => {
    setStudyTime(e.target.value);
    setTimeLeft(e.target.value * 60);
  };

  const handleBreakTimeChange = (e) => {
    setBreakTime(e.target.value);
  };

  const toggleTimer = () => {
    setIsRunning((prevIsRunning) => {
      if (prevIsRunning) {
        clearInterval(intervalId.current);
        return false;
      } else {
        intervalId.current = setInterval(() => {
          setTimeLeft((prevTime) => {
            if (prevTime === 0) {
              clearInterval(intervalId.current);
              setIsBreak(!isBreak);
              setTimeLeft(isBreak ? breakTime * 60 : studyTime * 60);
              return prevTime;
            }
            return prevTime - 1;
          });
        }, 1000);
        return true;
      }
    });
  };

  // format for display
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div>
      <div>
        <label htmlFor="study-time">Study Time: </label>
        <input
          type="number"
          id="study-time"
          value={studyTime}
          onChange={handleStudyTimeChange}
        />
      </div>
      <div>
        <label htmlFor="break-time">Break Time: </label>
        <input
          type="number"
          id="break-time"
          value={breakTime}
          onChange={handleBreakTimeChange}
        />
      </div>
      <div>
        <h3>It's {isBreak ? 'Break' : 'Study'} Time</h3>
        <p>
          {minutes}:{seconds.toString().padStart(2, '0')}
        </p>
        <button onClick={toggleTimer}>{isRunning ? 'Pause' : 'Start'}</button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
