import React, {ChangeEvent, useEffect, useRef, useState} from "react";
import "./Recording.css";

function Recording({index, url}: { index: number, url: string }) {
  let [isPlaying, setIsPlaying] = useState(false);
  let [name, setName] = useState(`audio-clip-${index + 1}-${Math.round(Date.now() / 1000)}`);
  let audioRef: React.RefObject<HTMLAudioElement> = useRef(null);
  useEffect(() => {
    let player = audioRef.current;

    player?.addEventListener("ended", () => {
      setIsPlaying(false);
      if (player) {
        player.currentTime = 0;
      }
    });
  }, []);

  let play = () => {
    let player = audioRef.current;
    player?.play().then(() => setIsPlaying(true));
  };

  let stop = () => {
    let player = audioRef.current;
    player?.pause();
    setIsPlaying(false);
  };

  let handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  return (
    <div className="recording">
      <div className="info">
        <label>
          Name: <input type="text" value={name} onChange={handleNameChange}/>
        </label>
      </div>
      <div className="controls">
        {
          isPlaying ?
            <button onClick={stop}>Stop</button>
            :
            <button onClick={play}>Play</button>
        }
        &nbsp;
        <a href={url} target="_blank" download={name} rel="noreferrer">Download</a>
        <audio src={url} ref={audioRef}></audio>
      </div>
    </div>
  );
}

export default Recording;