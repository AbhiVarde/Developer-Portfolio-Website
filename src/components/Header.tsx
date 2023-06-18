import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { useNavigate, NavLink } from "react-router-dom";
import resume from "../assets/documents/Abhi Varde - Resume .pdf";

const Navbar = ({ darkMode, toggleDarkMode }: any) => {
  const [toggle, setToggle] = useState(false);
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  const activeLink = "text-[#10B981] font-bold";

  const handleToggle = () => setToggle(!toggle);

  const handleClick = () => {
    setClick(!click);
    toggleDarkMode();
  };

  const handlelogoClick = () => {
    setToggle(!toggle);
    navigate("/");
  };

  const handlePDF = () => {
    window.open(resume, "_blank");
  };

  const handleSkill = () => {
    navigate("/skill");
    setToggle(!toggle);
  };
  const handleProject = () => {
    navigate("/project");
    setToggle(!toggle);
  };
  const handleAbout = () => {
    navigate("/about");
    setToggle(!toggle);
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
            } p-2 rounded-full ${
              darkMode ? "bg-[#1f2937] text-white" : "bg-[#e5e7eb] text-black"
            }`}
            onClick={handleClick}
          >
            {click ? <RiSunFill /> : <RiMoonFill />}
          </div>
          <div
            className="cursor-pointer text-lg md:text-xl font-bold"
            onClick={handlelogoClick}
          >
            AbhiVarde.{" "}
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
            <NavLink
              to="/skill"
              className={({ isActive }) => (isActive ? activeLink : "")}
              onClick={handleSkill}
            >
              <p>Skills</p>
            </NavLink>
            <NavLink
              to="/project"
              className={({ isActive }) => (isActive ? activeLink : "")}
              onClick={handleProject}
            >
              <p>Projects</p>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? activeLink : "")}
              onClick={handleAbout}
            >
              <p>About me</p>
            </NavLink>
          </div>
          <div className="hidden md:flex items-center gap-5">
            <div
              onClick={handleClick}
              className={`cursor-pointer p-2 rounded-full transition-transform duration-700 ${
                click ? "rotate-180" : "rotate-0"
              } ${
                darkMode ? "bg-[#1f2937] text-white" : "bg-[#e5e7eb] text-black"
              }`}
            >
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
          onClick={handleSkill}
        >
          Skills
        </p>
        <p
          className={`block py-2 border-b ${
            darkMode ? "border-gray-500" : "border-gray-300"
          }`}
          onClick={handleProject}
        >
          Projects
        </p>
        <p
          className={`block py-2 border-b ${
            darkMode ? "border-gray-500" : "border-gray-300"
          }`}
          onClick={handleAbout}
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
