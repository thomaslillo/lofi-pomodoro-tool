import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import PomodoroTimer from './components/PomodoroTimer.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <h1>Lofi Pomodoro</h1>
        <p>
          Super minimal so no distractions, always free, always ready for
          learning.
        </p>
      </div>

      <div className="lofivideo">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/jfKfPfyJRdk"
          title="lofi video player"
          frameborder="1"
          allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div>
        <p>
          Use the time below to set a countdown for each session, and you can
          play some cool lofi beats with the embedded radio.
        </p>
      </div>

      <div className="timer">
        <PomodoroTimer />
      </div>
    </div>
  );
}

export default App;
