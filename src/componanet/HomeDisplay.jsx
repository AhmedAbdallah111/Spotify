import { albumsData, songsData } from "../../assets/assets";
import Album from "./Album";
import Navbar from "./Navbar";
import Song from "./Song";

const HomeDisplay = () => {
  return (
    <>
      <Navbar />
      <div className="my-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <Album
              key={index}
              name={item.name}
              image={item.image}
              desc={item.desc}
              id={item.id}
            />
          ))}
        </div>
      </div>
      <div className="my-4">
        <h1 className="my-5 font-bold text-2xl">Today `s biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <Song
              key={index}
              name={item.name}
              image={item.image}
              desc={item.desc}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeDisplay;
