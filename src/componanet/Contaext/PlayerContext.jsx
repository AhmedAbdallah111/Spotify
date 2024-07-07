import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../../../assets/assets";
export const PlayerContext = createContext();
const PlayerContextProvider = (props) => {
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
    AudioRef.current.play();
    setPlayState(true);
  };
  const pause = () => {
    AudioRef.current.pause();
    setPlayState(false);
  };
  const playWithId = async (id) => {
    await setTrack(songsData[id]);
    await AudioRef.current.play();
    setPlayState(true);
  };
  const preves = async () => {
    if (track.id > 0) {
      await setTrack(songsData[track.id - 1]);
      await AudioRef.current.play();
      setPlayState(true);
    }
  };
  const next = async () => {
    if (track.id < songsData.length - 1) {
      await setTrack(songsData[track.id + 1]);
      await AudioRef.current.play();
      setPlayState(true);
    }
  };
  const seekSong = async (e) => {
    AudioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekbag.current.offsetWidth) *
      AudioRef.current.duration;
  };
  useEffect(() => {
    setTimeout(() => {
      AudioRef.current.ontimeupdate = () => {
        seekbar.current.style.width =
          Math.floor(
            (AudioRef.current.currentTime / AudioRef.current.duration) * 100
          ) + "%";
        setTime({
          currentTime: {
            second: Math.floor(AudioRef.current.currentTime % 60),
            minute: Math.floor(AudioRef.current.currentTime / 60),
          },
          TotalTime: {
            second: Math.floor(AudioRef.current.duration % 60),
            minute: Math.floor(AudioRef.current.duration / 60),
          },
        });
      };
    }, 1000);
  }, [AudioRef]);
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
    playWithId,
    preves,
    next,
    seekSong,
  };
  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};
export default PlayerContextProvider;
