import { useState } from 'react';
import PomodoroTimer from './components/PomodoroTimer';
import Footer from './components/Footer';
import Player from './components/Player';

function App() {

  return (
      <div className='bg-sky-300 h-full flex flex-col justify-center items-center text-center'>

        <div className=''>
          <h1>Lofi Pomodoro</h1>
          <p>
            Super minimal so no distractions, always free, always ready for
            learning.
          </p>
        </div>

        <Player />

        <div className=''>
          <p>
            Use the time below to set a countdown for each session, and you can
            play some cool lofi beats with the embedded radio.
          </p>
        </div>

        <PomodoroTimer />

        <Footer />
    </div>
  );
}

export default App;
