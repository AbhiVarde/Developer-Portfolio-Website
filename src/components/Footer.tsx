import {
  SiReact,
  SiTailwindcss,
  SiLinkedin,
  SiGithub,
  SiLeetcode,
} from "react-icons/si";
import { AiTwotoneHeart } from "react-icons/ai";

const Footer = ({ darkMode }: any) => {
  const currentYear = new Date().getFullYear();

  const handleLink1 = () => {
    window.open("https://www.linkedin.com/in/abhi-varde-6634551b1", "_blank");
  };
  const handleLink2 = () => {
    window.open("https://leetcode.com/AbhiVarde", "_blank");
  };
  const handleLink3 = () => {
    window.open("https://github.com/AbhiVarde", "_blank");
  };

  return (
    <footer
      className={`relative py-4 px-6 sm:px-12 border-t-2 mt-4 backdrop-filter backdrop-blur-lg bg-opacity-80 transition-all duration-200 ease-in-out ${
        darkMode
          ? "bg-[#18181B] text-white border-gray-800"
          : "bg-white text-black"
      }`}
    >
      <div className="flex flex-col md:flex-row justify-between items-center text-sm xl:text-base">
        <p className="hidden md:flex items-center">
          © {currentYear} Abhi Varde, Built with
          <SiReact className="ml-1 mr-1 text-[#087EA4]" />
          <SiTailwindcss className="ml-1 mr-1 text-teal-500" />
          and
          <AiTwotoneHeart className="ml-1 text-green-500" />
        </p>
        <div className="flex space-x-28 sm:space-x-48 md:space-x-16 cursor-pointer text-xl">
          <SiLinkedin onClick={handleLink1} />
          <SiLeetcode onClick={handleLink2} />
          <SiGithub onClick={handleLink3} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
