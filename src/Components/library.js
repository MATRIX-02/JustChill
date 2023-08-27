import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ libraryStatus, songs, setCurrentSong, audioRef, isPlaying, setSongs }) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            isPlaying={isPlaying}
            songs={songs}
            audioRef={audioRef}
            setCurrentSong={setCurrentSong}
            song={song}
            id={song.id}
            key={song.id}
            cover= {song.cover}
            active = {song.active}
            name={song.name}
            artist = {song.artist}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
