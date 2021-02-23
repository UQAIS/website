import React from "react";
import "./Stats.css";

function Stats() {
  return (
    <div className="podcast-container">
      <div className="pod-media">
        <section className="pod-left">
          <h1>Listen to our Podcast Series!</h1>
          <h2>
            This is our podcast series, where we will have all our talks
            recorded for you to playback
          </h2>
        </section>

        <iframe
          title="podcasts"
          src="https://open.spotify.com/embed/playlist/7AMPAWE4UHdhuCo8wgmrHc"
          width="50%"
          height="300px"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
    </div>
  );
}

export default Stats;
