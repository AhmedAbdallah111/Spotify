import { useContext } from "react";
import Display from "./componanet/Display";
import Player from "./componanet/Player";
import Sidebar from "./componanet/Sidebar";
import { PlayerContext } from "./componanet/Contaext/PlayerContext";

const App = () => {
  const { AudioRef, track } = useContext(PlayerContext);
  return (
    <>
      <div className="bg-black h-screen">
        <div className="h-[90%] flex">
          <Sidebar />
          <Display />
        </div>
        <Player />
        <audio ref={AudioRef} src={track.file} preload="auto"></audio>
      </div>
    </>
  );
};

export default App;
