import { useRef, useState } from "react";
import { songsData } from "../../../assets/assets";
import { PlayerContext } from "./PlayerContext";

export const PlayerContextProvider = (props) => {
  const AudioRef = useRef();
  const seekbar = useRef();
  const seekbag = useRef();
  const [track, setTrack] = useState(songsData[0]);
  const [PlayState, setPlayState] = useState(false);
  const [Time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    TotalTime: {
      second: 0,
      minute: 0,
    },
  });
  const Play = () => {
    AudioRef.current.Play();
    setPlayState(true);
  };
  const pause = () => {
    AudioRef.current.pause();
    setPlayState(false);
  };
  const contextValue = {
    AudioRef,
    seekbar,
    seekbag,
    track,
    setTrack,
    PlayState,
    setPlayState,
    Time,
    setTime,
    Play,
    pause,
  };
  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};
