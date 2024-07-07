import { Route, Routes, useLocation } from "react-router-dom";
import HomeDisplay from "./HomeDisplay";
import DisplayAlbum from "./DisplayAlbum";
import { useEffect, useRef } from "react";
import { albumsData } from "../../assets/assets";

const Display = () => {
  const ref = useRef();
  const loaction = useLocation();
  const isalbum = loaction.pathname.includes("album");
  const albumid = isalbum ? loaction.pathname.slice(-1) : "";
  const bgColor = albumsData[Number(albumid)].bgColor;
  useEffect(() => {
    if (isalbum) {
      ref.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else {
      ref.current.style.background = `#121212`;
    }
  });
  return (
    <div
      ref={ref}
      className="w-[100%] rounded px-6 pt-4 m-2 bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<HomeDisplay />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;
