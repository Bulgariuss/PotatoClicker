import React, { useState, useEffect } from "react";
import bgmusic from '../bgmusic.mp3';
const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(true);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    
  );

  useEffect(() => {
    audio.addEventListener('ended', () => audio.play());
    return () => {
      audio.removeEventListener('ended', () => audio.play());
    };
  }, []);

  return [playing, toggle];
};

const Player = () => {
  const [playing, toggle] = useAudio(bgmusic); 

  return (
    <div>
      <button className="musicButton" onClick={toggle}>{playing ? "Mute music" : "Unmute music"}</button>
    </div>
  );
};

export default Player;