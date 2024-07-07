import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold ">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            src={assets.arrow_left}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
          />
          <img
            onClick={() => navigate(1)}
            src={assets.arrow_right}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
            Explore Premium
          </p>
          <p className="px-3 bg-black text-[15px] cursor-pointer py-1 rounded-2xl">
            Install App
          </p>
          <p className="bg-purple-500 h-7 w-7 text-black rounded-full flex items-center justify-center">
            D
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black rounded-2xl px-4 py-1 cursor-pointer">
          All
        </p>
        <p className="bg-black rounded-2xl px-4 py-1 cursor-pointer">Music</p>
        <p className="bg-black rounded-2xl px-4 py-1 cursor-pointer">Podcast</p>
      </div>
    </>
  );
};

export default Navbar;
