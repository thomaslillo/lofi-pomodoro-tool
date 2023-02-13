import react from 'react';

const Player = (url) => {
    return (
        <div className="lofivideo">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/jfKfPfyJRdk"
            title="lofi video player"
            frameBorder="1"
            allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
    );
    }

export default Player;