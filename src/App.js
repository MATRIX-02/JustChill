import React, { useState, useRef } from "react";

// Import Styles
import "./styles/app.scss";

// Adding Components
import Player from "./Components/Player";
import Song from "./Components/song";
import Library from "./Components/library";
import Nav from "./Components/Nav";

// Import Util
import data from "./data";

function App() {
  const audioRef = useRef(null);
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  }); 
  const [libraryStatus, setLibraryStatus] = useState(false);
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    // Calculate Percentage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent/roundedDuration)*100);
    setSongInfo({ ...songInfo, currentTime: current, duration, animationPercentage:animation });
  };

  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} isPlaying = {isPlaying}/>
      <Player
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
        songs ={songs}
        setSongs = {setSongs}
        setCurrentSong = {setCurrentSong}
      />
      <Library
        libraryStatus={libraryStatus}
        isPlaying={isPlaying}
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
