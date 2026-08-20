import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { wallpapers } from "./data/wallpapers";

function App() {
  const[active, setActive] = useState("All");

  const buttons = [
    "All",
    "Nature",
    "Ocean",
    "Space",
    "Minimalist",
  ];

  const filterWallpapers = active === "All"
  ? wallpapers
  : wallpapers.filter((wallpaper) => wallpaper.categoria.toLocaleLowerCase().includes(active.toLowerCase()))
  return(
    <div className="w-full h-screen bg-zinc-800">
      <div className="w-full h-20 flex items-center justify-between p-5 bg-zinc-900">
        <h1 className="text-3xl text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-500">Wallpapers</h1>
        <div className="Search w-96 h-11 flex items-center justify-center">
          <input type="text" placeholder="Search wallpapers" className="w-full h-full outline-0 p-3 bg-zinc-700 border-2 border-zinc-600 rounded-bl-lg rounded-tl-lg text-white placeholder:text-white"/>
          <button className="w-12 h-full cursor-pointer flex items-center justify-center bg-blue-500 active:bg-blue-600 transition-all duration-300 rounded-br-lg rounded-tr-lg">
            <FaSearch className="text-2xl text-white"/>
          </button>
        </div>
      </div>
      <div className="w-full p-5 flex items-center justify-center flex-wrap gap-5">
        {buttons.map((btn) => (
          <button key={btn} onClick={() => setActive(btn)} className={`w-40 h-11 rounded-lg cursor-pointer transition-all duration-300 ${active === btn ? "bg-blue-500" : "bg-zinc-600 text-white"}`}>{btn}</button>
        ))}
      </div>
      <div className="w-full p-5 flex items-center justify-center flex-col bg-zinc-800">
        <div className="Banner w-[90%] h-20 flex items-center justify-items-start p-3 rounded-lg border-l-4 border-l-blue-500 bg-zinc-700">
          <h2 className="text-3xl text-white">Recent Wallpapers</h2>
        </div>
        <div className="w-full flex items-center justify-center flex-wrap gap-5 mt-5">
          {filterWallpapers.map((wallpaper, index) => (
            <div key={index} className="Card w-80 h-40 bg-zinc-700 border-2 border-zinc-600 overflow-hidden relative rounded-2xl">
              <img src={wallpaper.wallpaper} alt="Wallpaper" className="w-full h-full hover:scale-110 opacity-75 transition-all duration-300"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App
