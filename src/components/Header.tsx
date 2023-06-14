import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Navbar = ({ darkMode, toggleDarkMode }: any) => {
  const [toggle, setToggle] = useState(false);
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => setToggle(!toggle);

  const handleClick = () => {
    setClick(!click);
    toggleDarkMode();
  };

  const handlePDF = () => {
    const url = "./Abhi Varde - Resume.pdf";
    window.open(url, "_blank");
  };

  return (
    <div className="relative">
      <nav
        className={`py-4 px-6 sm:px-12 border-b-2 backdrop-filter backdrop-blur-lg bg-opacity-80 transition-all duration-200 ease-in-out ${
          darkMode
            ? "bg-[#18181B] text-white border-gray-800"
            : "bg-white text-black"
        }`}
      >
        <div className="flex justify-between items-center tracking-wide">
          <div
            className={`block text-lg md:hidden cursor-pointer transition-transform duration-700 ${
              click ? "rotate-180" : "rotate-0"
            }`}
            onClick={handleClick}
          >
            {click ? <RiSunFill /> : <RiMoonFill />}
          </div>
          <div
            className="cursor-pointer text-lg md:text-xl font-bold"
            onClick={() => navigate("/")}
          >
            Abhi Varde
          </div>
          <div
            className={`md:hidden text-lg rounded-md p-2 cursor-pointer ${
              darkMode ? "bg-[#1f2937] text-white" : "bg-[#e5e7eb] text-black"
            }`}
            onClick={handleToggle}
          >
            <AiOutlineMenu />
          </div>
          <div
            className={`hidden md:flex space-x-8 cursor-pointer ${
              darkMode ? "text-white" : ""
            }`}
          >
            <p onClick={() => navigate("/skill")}>Skills</p>
            <p onClick={() => navigate("/project")}>Projects</p>
            <p onClick={() => navigate("/about")}>About me</p>
          </div>
          <div className="hidden md:flex items-center gap-5">
            <div onClick={handleClick} className="cursor-pointer">
              {click ? <RiSunFill /> : <RiMoonFill />}
            </div>
            <button
              className={`py-1 px-4 border-2 border-gray-400 ${
                darkMode ? "hover:border-white " : "hover:border-black"
              } rounded-md cursor-pointer`}
              onClick={handlePDF}
            >
              View Resume
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`absolute z-10 md:hidden shadow-lg ml-2 rounded-lg px-4 w-[90%] cursor-pointer backdrop-filter backdrop-blur-lg bg-opacity-90 font-semibold ${
          darkMode ? "bg-[#1f2937] " : "text-[#374151] bg-white"
        } transition-all duration-300 ease-in-out opacity-0 ${
          toggle ? "opacity-100" : ""
        }`}
      >
        <p
          className={`block py-2 border-b ${
            darkMode ? "border-gray-500" : "border-gray-300"
          }`}
          onClick={() => navigate("/skill")}
        >
          Skills
        </p>
        <p
          className={`block py-2 border-b ${
            darkMode ? "border-gray-500" : "border-gray-300"
          }`}
          onClick={() => navigate("/project")}
        >
          Projects
        </p>
        <p
          className={`block py-2 border-b ${
            darkMode ? "border-gray-500" : "border-gray-300"
          }`}
          onClick={() => navigate("/about")}
        >
          About me
        </p>
        <button
          className={`my-3 border-2 border-gray-400 ${
            darkMode
              ? "hover:border-white "
              : "hover:border-black text-[#374151]"
          } py-1 px-4 rounded-md`}
          onClick={handlePDF}
        >
          View Resume
        </button>
      </div>
    </div>
  );
};

export default Navbar;
