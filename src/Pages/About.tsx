import { useEffect } from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { BiMessageSquareDetail } from "react-icons/bi";
import experiences from "../assets/Data/Experience";
import blogs from "../assets/Data/Blog";

const About = ({ darkMode }: any) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const submitForm = (event: any) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const recipient = email.endsWith("@gmail.com")
      ? "abhivarde@gmail.com"
      : email.endsWith("@icloud.com")
      ? "abhivarde@icloud.com"
      : null;

    if (recipient) {
      window.location.href = "mailto:" + recipient;
    }
  };

  return (
    <div className="flex flex-col max-w-2xl mx-auto mt-4 md:mt-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <h1
          className={`font-bold text-3xl md:text-5xl tracking-tight mb-2 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Abhi Varde
        </h1>
        <p className={`mb-2 ${darkMode ? "text-zinc-400" : "text-zinc-900"} `}>
          🚀 Passionate Frontend Software Engineer skilled in creating engaging
          user experiences for web applications.I like to work on exciting
          projects on both the Frontend and the Backend.
        </p>
        <p className={`mb-2 ${darkMode ? "text-zinc-400" : "text-zinc-900"} `}>
          🎯Current Focus:{" "}
          <span className={` ${darkMode ? "text-white" : "text-black"}`}>
            Frontend
          </span>
        </p>
        <p className={` ${darkMode ? "text-zinc-400" : "text-zinc-900"}`}>
          Find me on{" "}
          <a
            href="https://instagram.com/iamabhi_189?igshid=MmIzYWVlNDQ5Yg=="
            className="font-bold group dark:text-zinc-400 font-inter relative inline-flex overflow-hidden"
            target="__blank"
          >
            <span
              className={`relative ${darkMode ? "text-white" : "text-black"}`}
            >
              Instagram
            </span>
          </a>{" "}
          and{" "}
          <a
            href="https://twitter.com/varde_abhi"
            className="font-bold group dark:text-zinc-400 font-inter relative inline-flex overflow-hidden"
            target="__blank"
          >
            <span
              className={`relative ${darkMode ? "text-white" : "text-black"}`}
            >
              Twitter
            </span>
          </a>{" "}
          for more updates and memes.😄
        </p>
      </motion.div>
      <h1
        className={`font-bold text-2xl md:text-4xl tracking-tight mb-2${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        Recent Blogs.
      </h1>
      <p className={`pt-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
        👨‍💻I've explored various technologies and wanted to share my experience
        with you!
      </p>
      {blogs.map((blog, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className={`border border-opacity-90 hover:border-gray-500 hover:border-opacity-100 
        shadow-lg cursor-pointer hover:shadow-xl transform hover:-translate-y-1 rounded-xl p-3 mt-4 w-full relative transition-all duration-200 ease-in-out ${
          darkMode ? "border-zinc-700" : "border-gray-300"
        }`}
        >
          <span
            className={`absolute w-[90%] -top-px left-px h-[2px] bg-gradient-to-r ${
              darkMode
                ? "from-blue-400/0 via-blue-400/40 to-blue-400/0"
                : "from-blue-500/0 via-blue-500/40 to-blue-500/0"
            }`}
          ></span>
          <span
            className={`absolute w-[90%] -bottom-px right-px h-[2px] bg-gradient-to-r ${
              darkMode
                ? "from-blue-400/0 via-blue-400/40 to-blue-400/0"
                : "from-blue-500/0 via-blue-500/40 to-blue-500/0"
            }`}
          ></span>
          <a
            href={blog.Link}
            className="flex flex-col md:flex-row space-x-0 md:space-x-4"
          >
            <img
              src={blog.img}
              className="rounded-md w-full sm:h-64 md:h-auto object-cover md:w-72 mb-4 md:mb-0"
              alt={blog.title}
            />
            <div className="flex flex-col justify-center">
              <h4
                className={`font-bold text-xl tracking-tight mb-2 ${
                  darkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                {blog.title}
              </h4>
              <p
                className={`text-sm ${
                  darkMode ? "text-zinc-400" : "text-zinc-900"
                }`}
              >
                {blog.description}
              </p>
            </div>
          </a>
        </motion.div>
      ))}
      <a
        type="button"
        className={`flex items-center text-sm my-4 mx-auto px-4 py-1 rounded-md font-medium ${
          darkMode ? "text-gray-100" : "text-gray-900"
        }`}
        href="https://abhivarde.hashnode.dev/"
      >
        See more
        <FiChevronDown className="h-4 w-4 ml-1 items-center" />
      </a>
      <h1
        className={`font-bold text-2xl md:text-4xl tracking-tight mb-2 ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        My Experience.
      </h1>
      <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
        These are the companies that I have worked in and was able to gain
        experience from. 💼✨
      </p>
      {experiences.map((experience, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className={`border border-opacity-90 hover:border-gray-500 hover:border-opacity-100 
            shadow-lg cursor-pointer hover:shadow-xl transform hover:-translate-y-1 rounded-xl p-4 mt-4 mb-6 w-full relative transition-all duration-200 ease-in-out ${
              darkMode ? "border-zinc-700" : "border-gray-300"
            }`}
        >
          <span
            className={`absolute w-[90%] -top-px left-px h-[2px] bg-gradient-to-r ${
              darkMode
                ? "from-blue-400/0 via-blue-400/40 to-blue-400/0"
                : "from-blue-500/0 via-blue-500/40 to-blue-500/0"
            }`}
          ></span>
          <span
            className={`absolute w-[90%] -bottom-px right-px h-[2px] bg-gradient-to-r ${
              darkMode
                ? "from-blue-400/0 via-blue-400/40 to-blue-400/0"
                : "from-blue-500/0 via-blue-500/40 to-blue-500/0"
            }`}
          ></span>
          <h4
            className={`text-xl font-bold tracking-tight ${
              darkMode ? "text-gray-100" : "text-gray-900"
            }`}
          >
            {experience.company}
          </h4>
          <p
            className={`leading-5 text-sm  ${
              darkMode ? "text-zinc-400" : "text-zinc-900"
            }`}
          >
            {experience.role}
          </p>
          <p
            className={`leading-6 pt-2 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {experience.description}
          </p>
          <div className="pt-3 flex md:flex-row flex-wrap">
            {experience.skills.map((skill, index) => (
              <p
                key={index}
                className={`leading-5 mb-2 ${
                  darkMode
                    ? "border border-zinc-700 text-gray-300 bg-transparent"
                    : "bg-gray-100 text-gray-700"
                }  rounded-md text-xs tracking-wide italic mr-2 px-1`}
              >
                {skill}
              </p>
            ))}
          </div>
        </motion.div>
      ))}
      <h1
        className={`font-bold text-2xl md:text-4xl tracking-tight mb-2 ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        Upcoming Projects.
      </h1>
      <motion.div
        className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full mt-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div
          className={`border border-opacity-90 hover:border-gray-500 hover:border-opacity-100 
            shadow-lg cursor-pointer hover:shadow-xl transform hover:-translate-y-1 rounded-xl p-4 w-full relative transition-all duration-200 ease-in-out ${
              darkMode ? "border-zinc-700" : "border-gray-300"
            }`}
        >
          <span
            className={`absolute w-[90%] -top-px left-px h-[2px] bg-gradient-to-r ${
              darkMode
                ? "from-blue-400/0 via-blue-400/40 to-blue-400/0"
                : "from-blue-500/0 via-blue-500/40 to-blue-500/0"
            }`}
          ></span>
          <span
            className={`absolute w-[90%] -bottom-px right-px h-[2px] bg-gradient-to-r ${
              darkMode
                ? "from-blue-400/0 via-blue-400/40 to-blue-400/0"
                : "from-blue-500/0 via-blue-500/40 to-blue-500/0"
            }`}
          ></span>
          <div
            className={`h-8 w-8 mb-2 text-3xl font-bold tracking-tight ${
              darkMode ? "text-gray-100" : "text-gray-900"
            }`}
          >
            <BiMessageSquareDetail />
          </div>
          <h4
            className={`text-lg font-bold tracking-tight ${
              darkMode ? "text-gray-100" : "text-gray-900"
            }`}
          >
            More projects coming soon..
          </h4>
          <p
            className={`leading-7 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            } pt-2`}
          >
            💡 Ideas flow through me all day long! As soon as I dive into one, I
            make sure to update my creative hub to capture them all.
          </p>
        </div>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`font-bold text-2xl md:text-4xl tracking-tight mb-2 mt-5 ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        Contact me.
      </motion.h1>
      <p className={`${darkMode ? "text-zinc-400" : "text-zinc-900"}`}>
        Email me for inquiries or discussions.
      </p>
      <div
        className={`border rounded p-6 my-6 w-full ${
          darkMode
            ? "border-gray-700 bg-gray-800"
            : "border-teal-200 bg-teal-50"
        }`}
      >
        <p
          className={`my-2 text-gray-200 ${
            darkMode ? "text-gray-200" : "text-gray-700"
          }`}
        >
          Leave your email ID, and I'll reach out to you.
        </p>
        <form className="relative my-4" onSubmit={() => submitForm(event)}>
          <div className="flex items-center">
            <input
              type="email"
              aria-label="Email for newsletter"
              name="email"
              placeholder="abhi@icloud.com"
              autoComplete="email"
              required
              className={`px-4 py-2 mt-1 border block w-full rounded-md ${
                darkMode
                  ? "bg-gray-700 text-gray-100 border-zinc-700"
                  : "bg-white text-gray-900 border-gray-200"
              }`}
            />
            <button
              className={`ml-4 flex-shrink-0 px-6 py-2 font-semibold rounded-md transition-colors duration-300 ${
                darkMode
                  ? "bg-teal-500 text-gray-100 hover:bg-teal-600 focus:bg-teal-700"
                  : "bg-teal-300 text-gray-900 hover:bg-teal-400 focus:bg-teal-500"
              }`}
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default About;
