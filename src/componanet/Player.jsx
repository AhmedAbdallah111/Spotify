import { useContext } from "react";
import { assets } from "../../assets/assets";
import { PlayerContext } from "./Contaext/PlayerContext";

const Player = () => {
  const {
    track,
    seekbag,
    seekbar,
    Play,
    pause,
    PlayState,
    Time,
    next,
    preves,
    seekSong,
  } = useContext(PlayerContext);
  return (
    <div className="h-[10%] bg-black justify-between items-center text-white flex px-4 ">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track.image} />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img className="w-4 cursor-pointer" src={assets.shuffle_icon} />
          <img
            onClick={preves}
            className="w-4 cursor-pointer"
            src={assets.prev_icon}
          />
          {PlayState ? (
            <img
              onClick={pause}
              className="w-4 cursor-pointer"
              src={assets.pause_icon}
            />
          ) : (
            <img
              onClick={Play}
              className="w-4 cursor-pointer"
              src={assets.play_icon}
            />
          )}
          <img
            onClick={next}
            className="w-4 cursor-pointer"
            src={assets.next_icon}
          />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} />
        </div>
        <div className="flex items-center gap-5">
          <p>
            {Time.currentTime.minute}:{Time.currentTime.second}
          </p>
          <div
            ref={seekbag}
            onClick={seekSong}
            className=" w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer "
          >
            <hr ref={seekbar} className="h-1 border-none w-0 bg-green-800" />
          </div>
          <p>
            {Time.TotalTime.minute}:{Time.TotalTime.second}
          </p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img className="w-4" src={assets.plays_icon} />
        <img className="w-4" src={assets.mic_icon} />
        <img className="w-4" src={assets.queue_icon} />
        <img className="w-4" src={assets.speaker_icon} />
        <img className="w-4" src={assets.volume_icon} />
        <div className="rounded bg-slate-50 w-20 h-1"></div>
        <img className="w-4" src={assets.mini_player_icon} />
        <img className="w-4" src={assets.zoom_icon} />
      </div>
    </div>
  );
};

export default Player;
