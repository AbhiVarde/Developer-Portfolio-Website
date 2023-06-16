import python from "../assets/blogs/python.jpg";
import node from "../assets/blogs/node.jpg";
import { FiChevronDown } from "react-icons/fi";

const experiences = [
  {
    company: "SolGuruz LLP",
    role: "Software Engineer Intern",
    description:
      "As a software engineering intern, I gained experience with React JS, TypeScript, Redux, and REST API. Proficient in GitLab for version control and collaboration.",
    skills: [
      "React",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "Material UI",
      "GitLab",
      "Rest APIs",
    ],
  },
  {
    company: "LetsGrowMore",
    role: "Web Development Intern",
    description:
      "As a web development intern, I successfully completed beginner and intermediate challenges.",
    skills: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    company: "Anon Global foundation",
    role: "Research Intern",
    description:
      "As a Research intern, I gained valuable experience in conducting research, teamwork, and presenting on Digital Transformation in the Crisis.",
    skills: ["Research", "Canva", "Teamwork", "Life skill"],
  },
];

const blogs = [
  {
    img: python,
    title:
      "How do I use Python to implement ceaser cipher encryption and decryption?",
    description:
      "We'll learn about the ceaser cipher and how to encrypt and decrypt data with it in Python. Let's get this learning process started. What is the...",
  },
  {
    img: node,
    title: "How to create your first Node.js web server ?",
    description:
      "Hello Everyone !👋 Abhi here; nice to meet you all. In this article I'm going to walk you through every step you need to take to build your very first..",
  },
];

const About = ({ darkMode }: any) => {
  return (
    <div className="flex flex-col max-w-2xl mx-auto mt-4 md:mt-10">
      <div className="mb-6">
        <h1
          className={`font-bold text-3xl md:text-5xl tracking-tight mb-2 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Abhi Varde
        </h1>
        <p className={`mb-2 ${darkMode ? "text-zinc-400" : "text-zinc-900"} `}>
          Passionate Frontend Software Engineer skilled in creating engaging
          user experiences for web applications. I like to work on exciting
          projects on both the Frontend and the Backend.
        </p>
        <p className={`mb-2 ${darkMode ? "text-zinc-400" : "text-zinc-900"} `}>
          Current Focus:{" "}
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
          for more updates and memes.
        </p>
      </div>
      <h1
        className={`font-bold text-2xl md:text-4xl tracking-tight mb-4 ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        My Experience.
      </h1>
      <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
        These are the companies that I have worked in and was able to gain
        experience from.
      </p>
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`border border-opacity-90 hover:border-gray-500 hover:border-opacity-100 
            shadow-lg cursor-pointer hover:shadow-xl transform hover:-translate-y-1 rounded-xl p-4 mt-4 w-full relative transition-all duration-200 ease-in-out ${
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
        </div>
      ))}
      <h1
        className={`font-bold text-2xl md:text-4xl tracking-tight my-4 ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        Recent Blogs.
      </h1>
      <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
        I've explored various technologies and wanted to share my experience
        with you.
      </p>
      {blogs.map((blog, index) => (
        <div
          key={index}
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
            href=""
            className="flex flex-col md:flex-row space-x-0 md:space-x-4"
          >
            <img src={blog.img} className="rounded-md w-72 mb-4 md:mb-0" />
            <div>
              <h4
                className={`font-bold text-base md:text-xl tracking-tight mb-2 ${
                  darkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                {blog.title}
              </h4>
              <p
                className={` ${
                  darkMode ? "text-zinc-400" : "text-zinc-900"
                } text-sm`}
              >
                {blog.description}
              </p>
            </div>
          </a>
        </div>
      ))}
      <a
        type="button"
        className={`flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium ${
          darkMode ? "text-gray-100" : "text-gray-900"
        }`}
        href="https://abhivarde.hashnode.dev/"
      >
        See more
        <FiChevronDown className="h-4 w-4 ml-1 items-center" />
      </a>
      <h1
        className={`font-bold text-2xl md:text-4xl tracking-tight my-4 ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        Contact me.
      </h1>
      <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
        Email me for inquiries or discussions.
      </p>
      <div
        className={`border  rounded p-6 my-4 w-full ${
          darkMode
            ? "border-gray-800 bg-[#c0e9d4]"
            : "bg-[#e0f4e9] border-teal-200"
        } `}
      >
        <p className="my-1 text-gray-800 dark:text-gray-200">
          Leave your email ID, and I'll reach out to you.
        </p>
        <form className="relative my-4">
          <input
            type="email"
            aria-label="Email for newsletter"
            placeholder="abhi@icloud.com"
            autoComplete="email"
            required
            className={`px-4 py-2 mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full border-gray-300 rounded-md ${
              darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
            } `}
          />
          <button
            className={`flex items-center justify-center absolute right-1 top-1 px-4 font-bold h-8 ${
              darkMode
                ? "bg-gray-700 text-gray-100"
                : "bg-gray-100 text-gray-900"
            } rounded w-28`}
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default About;
