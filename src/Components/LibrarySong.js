import React from "react";
import {playAudio} from "../util";

const LibrarySong = ({name, artist,setSongs,  cover, song, songs, setCurrentSong, id, audioRef, isPlaying}) =>{

    const songSelectHandler = () =>{
        const selectedSong = songs.filter((state) => state.id === id);
        // const selectedSong = song;
        setCurrentSong({...selectedSong[0]});
        // setCurrentSong(song);

        // add active state
        const newSongs = songs.map((song) =>{
            if(song.id === id){
                return{
                    ...song,
                    active: true,
                };
            }
            else{
                return{
                    ...song,
                    active: false,
                };
            }
        });

        setSongs(newSongs);

        // Check if the song is playing
        playAudio(isPlaying, audioRef);
        
    }

    return(
        <div onClick={songSelectHandler} className={`library-song ${song.active ? "selected": ""}`}>
            <img alt={name} src={cover}></img>
            <div className="song-description">
            <h3>{name}</h3>
            <h4>{artist}</h4>
            </div>  
        </div> 
    )
}

export default LibrarySong;